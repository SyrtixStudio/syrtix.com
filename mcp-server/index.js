import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import PocketBase from "pocketbase";

import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno desde el .env del directorio raíz
try {
  const envPath = join(__dirname, "../.env");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf8");
    content.split(/\r?\n/).forEach((line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || "";
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1);
        }
        process.env[key] = value.trim();
      }
    });
  }
} catch (e) {
  console.error("Error loading .env in MCP server:", e.message);
}

// Configuración de PocketBase para Syrtix
const PB_URL = process.env.VITE_POCKETBASE_URL || "https://syrtix.5.78.86.159.sslip.io";
const PB_EMAIL = process.env.PB_ADMIN_EMAIL;
const PB_PASSWORD = process.env.PB_ADMIN_PASSWORD;

const pb = new PocketBase(PB_URL);
let isAuthenticated = false;

async function ensureAuth() {
  if (!isAuthenticated || !pb.authStore.isValid) {
    try {
      await pb.admins.authWithPassword(PB_EMAIL, PB_PASSWORD);
      isAuthenticated = true;
    } catch (error) {
      console.error("Error authenticate MCP to PB:", error.message);
      throw new Error(`Failed to authenticate with PocketBase: ${error.message}`);
    }
  }
}

const server = new Server(
  {
    name: "syrtix-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Definir las herramientas del MCP
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_records",
        description: "Fetch records from a specific collection (users, ia_leads, testimonials).",
        inputSchema: {
          type: "object",
          properties: {
            collection: {
              type: "string",
              description: "Name of the collection",
            },
            page: { type: "number" },
            perPage: { type: "number" },
            filter: { type: "string", description: "Filter string (optional, e.g. 'active = true')" },
            sort: { type: "string", description: "Sort string (optional, e.g. '-created')" },
          },
          required: ["collection"],
        },
      },
      {
        name: "get_schema",
        description: "Returns the structure of the Syrtix database collections.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      }
    ],
  };
});

// Manejar la ejecución de las herramientas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  await ensureAuth();

  if (request.params.name === "list_records") {
    try {
      const { collection, page = 1, perPage = 50, filter, sort } = request.params.arguments;
      
      const options = {};
      if (filter) options.filter = filter;
      if (sort) options.sort = sort;

      const result = await pb.collection(collection).getList(page, perPage, options);
      
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching records: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }

  if (request.params.name === "get_schema") {
    try {
      const collections = await pb.collections.getFullList();
      const schemaStr = collections.map(c => 
        `Collection: ${c.name}\nFields:\n${c.schema.map(f => `  - ${f.name} (${f.type})`).join('\n')}`
      ).join('\n\n');
      
      return {
        content: [
          {
            type: "text",
            text: schemaStr,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching schema: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }

  throw new Error(`Unknown tool: ${request.params.name}`);
});

// Iniciar el servidor
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Syrtix MCP Server is running on stdio");
}

main().catch(console.error);

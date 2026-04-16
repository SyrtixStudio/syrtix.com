import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import PocketBase from "pocketbase";

// Configuración de PocketBase para Syrtix
const PB_URL = "https://syrtix.5.78.86.158.sslip.io";
const PB_EMAIL = "syrtix.solutions@gmail.com";
const PB_PASSWORD = "Tutula0754*";

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

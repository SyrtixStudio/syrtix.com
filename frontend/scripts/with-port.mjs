import { spawn } from "node:child_process";
import process from "node:process";
import console from "node:console";

const [, , command, ...args] = process.argv;

if (!command) {
  console.error("Usage: node scripts/with-port.mjs <command> [...args]");
  process.exit(1);
}

const port = process.env.PORT || "4173";
const resolvedArgs = args.map((arg) => (arg === "{PORT}" ? port : arg));

const child = spawn(command, resolvedArgs, {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

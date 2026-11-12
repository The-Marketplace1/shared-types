import { createRequire } from "node:module";
import fs from "node:fs";

globalThis.require = createRequire(import.meta.url);

const esbuild = await import("esbuild");
const { default: esbuildPluginPino } = await import("esbuild-plugin-pino");

fs.rmSync("dist", { recursive: true, force: true });

await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  target: "node22",
  format: "esm",
  outdir: "dist",
  outExtension: { ".js": ".mjs" },
  sourcemap: true,
  plugins: [esbuildPluginPino({ transports: ["pino-pretty"] })],
  banner: {
    js: 'import { createRequire } from "node:module"; const require = createRequire(import.meta.url);',
  },
});

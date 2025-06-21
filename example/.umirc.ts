import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "npm",
  plugins: ["@umijs/plugin-electron"],
  electron: {},
});

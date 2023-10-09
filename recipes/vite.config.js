import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://chef-louis.github.io/v46-tier2-team-22",
  plugins: [react()],
});

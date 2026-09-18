import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração enxuta e independente do Replit.
// "base: /" porque a landing page vai morar na RAIZ do subdomínio
// (ex: https://lp.ilambiental.com.br/), e não em uma subpasta.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

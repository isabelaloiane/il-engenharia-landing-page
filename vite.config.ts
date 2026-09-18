import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração enxuta e independente do Replit.
// "base: ./" (caminho relativo) para o build funcionar tanto no
// endereço temporário do GitHub Pages (isabelaloiane.github.io/il-engenharia-landing-page/)
// quanto no domínio final (https://lp.ilambiental.com.br/) sem precisar mudar nada.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

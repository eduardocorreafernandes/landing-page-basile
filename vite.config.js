import { defineConfig } from 'vite';

export default defineConfig({
  // Fotos/fontes de src/assets recebem hash de conteúdo no build, inclusive srcset.
  build: { assetsInlineLimit: 0 },
});

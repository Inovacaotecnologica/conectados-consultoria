import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Desativa o HMR quando definido pela variável de ambiente.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Desativa o monitoramento de arquivos quando necessário.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
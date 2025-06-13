import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/yagojogador.github.io/', // Substitua 'portfolio' pelo nome do repositório no GitHub
});
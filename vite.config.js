import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/yagojogador10.github.io/' // Substitua 'yagojogador10.github.io' pelo nome do repositório no GitHub
});

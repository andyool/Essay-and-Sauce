import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed at https://andyool.github.io/Essay-and-Sauce/
export default defineConfig({
  base: '/Essay-and-Sauce/',
  plugins: [react()],
});

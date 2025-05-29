// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/food-Delivery-Website/',  // MUST match your GitHub repo name
  plugins: [react()],
});

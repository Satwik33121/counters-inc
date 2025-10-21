import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/counters-inc/',  // Replace with your actual repo name
  plugins: [react()],
})
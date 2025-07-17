import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/week-3-react-js-assignment-VKari20/', // 👈 add this line
  plugins: [react()],
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path') //必须要引入resolve 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  resolve:{
    alias: {
        '@': resolve(__dirname, 'src')
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: "./",
    build: {
        assetsDir: "./",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html')
            }
        }
    },
    preview: {
        port: 3000
    }
})

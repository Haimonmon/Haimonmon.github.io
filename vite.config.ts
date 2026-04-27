import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        port: 9000
    },
    resolve: {
        alias: {
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@components": path.resolve(__dirname, "./src/app/components"),
            "@library": path.resolve(__dirname, "./src/lib")
        }
    }
})


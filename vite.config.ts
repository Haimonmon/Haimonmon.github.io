import path from "path";
import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const viteConfig: UserConfig = defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 9000,
    },
    resolve: {
        // TODO: Fix this as its very confusing to have differnt aliases
        alias: {
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@library": path.resolve(__dirname, "./src/lib"),
            "@data-pages": path.resolve(__dirname, "./src/data/pages"),
            "@components": path.resolve(__dirname, "./src/app/components"),
            "@data-components": path.resolve(__dirname, "./src/data/components"),
            "@data": path.resolve(__dirname, "./src/data"),
        },
    },
});

export default viteConfig;

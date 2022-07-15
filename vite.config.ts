import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from "path";
import vitePluginImp from 'vite-plugin-imp'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style(name) {
                        // use less
                        return `antd/es/${name}/style/index.js`
                    }
                },
            ]
        })
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@page": resolve(__dirname, "src/page"),
        }
    },
    css: {
        modules: {
            localsConvention: "camelCase",
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
});

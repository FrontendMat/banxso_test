import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr(), react()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
    define: {
        __API__: JSON.stringify('https://banxo-tets-server.vercel.app/api/'),
    },
    build: {
        rollupOptions: {
            // https://rollupjs.org/configuration-options/
        },
    },
})

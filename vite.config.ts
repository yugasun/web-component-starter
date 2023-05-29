import { defineConfig } from 'vite';
import * as path from 'path';
import replace from '@rollup/plugin-replace';
import { createHtmlPlugin } from 'vite-plugin-html';
import ViteInspector from 'vite-plugin-inspect';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'web-component-starter',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            // external: /^lit/,
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: ``,
            },
        },
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
            /**
             * Data that needs to be injected into the index.html ejs template
             */
            inject: {
                data: {
                    title: 'vue-ts-starter',
                },
            },
        }),

        // https://github.com/antfu/unocss
        // see unocss.config.ts for config
        Unocss(),

        ViteInspector(),

        replace({
            preventAssignment: true,
            __DATE__: new Date().toISOString(),
        }),
    ],
    server: {
        port: 8080,
        hmr: {
            host: '127.0.0.1',
            port: 8080,
        },
    },
});

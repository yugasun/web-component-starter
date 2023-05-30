import { defineConfig } from 'vite';
import * as path from 'path';
import replace from '@rollup/plugin-replace';
import { createHtmlPlugin } from 'vite-plugin-html';
import ViteInspector from 'vite-plugin-inspect';
import Unocss from 'unocss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const customElementName = 'web-component-starter';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: customElementName,
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
        // https://github.com/vitejs/vite/issues/1579#issuecomment-1264626768
        cssInjectedByJsPlugin({
            styleId: 'uno-css',
            topExecutionPriority: false,
            // FIXME: should apply style to all web components
            // injectCodeFunction: function injectCodeCustomRunTimeFunction(
            //     cssCode,
            //     options,
            // ) {
            //     try {
            //         if (typeof document !== 'undefined') {
            //             const styleNode = document.createElement('style');
            //             styleNode.id = options.styleId;
            //             const cssTextNode = document.createTextNode(cssCode);
            //             styleNode.appendChild(cssTextNode);
            //             // query shadowRoot
            //             const elements =
            //                 document.querySelectorAll('web-component-starter');

            //             if (elements.length > 0) {
            //                 elements.forEach((ele) => {
            //                     ele.shadowRoot.prepend(
            //                         styleNode
            //                     );
            //                 });
            //             }
            //         }
            //     } catch (e) {
            //         console.error('vite-plugin-css-injected-by-js', e);
            //     }
            // },
        }),

        createHtmlPlugin({
            minify: true,
            /**
             * Data that needs to be injected into the index.html ejs template
             */
            inject: {
                data: {
                    title: 'web-component-starter',
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

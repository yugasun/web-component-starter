import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UnoElement } from './UnoElement';

@customElement('wp-footer')
class WpFooter extends UnoElement {
    static styles = [
        UnoElement.styles,
        css`
            .footer {
                line-height: 60px;
                font-size: 16px;
            }
        `,
    ];

    year = new Date().getFullYear();
    render() {
        return html`
            <div class="footer text-primary-dark dark:text-ternary-light">
                @${this.year}
                <a
                    class="link__item underline"
                    href="https://github.com/yugasun/web-component-starter"
                    target="_blank"
                >
                    Github
                </a>
                <span class="p-2"> | </span>
                <a
                    class="link__item underline"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                >
                    Vite
                </a>
                <span class="p-2"> | </span>
                <a
                    class="link__item underline"
                    href="https://lit.dev/"
                    target="_blank"
                    >Lit</a
                >
            </div>
        `;
    }
}

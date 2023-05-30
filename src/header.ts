import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import unocss from 'uno.css';
import { UnoElement } from './UnoElement';

@customElement('wp-header')
export class WpFooter extends UnoElement {
    static styles = [
        UnoElement.styles,
        css`
            .wp-header {
                font-weight: bold;
                font-size: 2rem;
                line-height: 2rem;
            }
        `,
    ];
    render() {
        return html` <header class="wp-header" part="header">
            <slot></slot>
        </header>`;
    }
}

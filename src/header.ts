import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import unocss from 'uno.css';
import { UnoElement } from './UnoElement';

@customElement('wp-header')
export class WpFooter extends UnoElement {
    static styles = [UnoElement.styles, css``];
    render() {
        return html`<header class="font-bold text-2xl">
            Web Component Starter
        </header>`;
    }
}

import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import unocss from 'uno.css';

import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { indexStyles } from './styles';

import { UnoElement } from './UnoElement';
import './header';
import './footer';
import './container';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('web-component-starter')
export class StarterElement extends UnoElement {
    static styles = [UnoElement.styles, indexStyles];

    /**
     * The name to say "Hello" to.
     */
    @property()
    name = 'Web Component';

    /**
     * The number of times the button has been clicked.
     */
    @property({ type: Number })
    count = 0;

    headerTemplate(title: string) {
        return html`<header>${title}</header>`;
    }

    render() {
        return html`
            <wp-header></wp-header>
            <wp-container></wp-container>
            <slot></slot>
            <wp-footer></wp-footer>
        `;
    }

    private _onClick() {
        this.count++;
    }

    foo(): string {
        return 'foo';
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-component-starter': StarterElement;
    }
}

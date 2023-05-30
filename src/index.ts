import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

    render() {
        return html`
            <wp-header>Web Component Starter</wp-header>
            <wp-container name=${this.name} count=${this.count}></wp-container>
            <slot></slot>
            <wp-footer></wp-footer>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-component-starter': StarterElement;
    }
}

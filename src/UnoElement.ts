import { type CSSResultGroup, LitElement, css, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import unocss from 'uno.css';
import unoReset from '@unocss/reset/normalize.css';

@customElement('uno-element')
export class UnoElement extends LitElement {
    static styles = css`
        ${unsafeCSS(unocss)}
        // FIXME: unocss reset does not work
        ${unsafeCSS(unoReset)}
        :host {
            --primary-color: #42b983;
        }

        .link__item {
            color: var(--primary-color);
        }
    ` as CSSResultGroup;
    render() {
        return html`<slot></slot>`;
    }
}

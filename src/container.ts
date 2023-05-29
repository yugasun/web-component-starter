import { CSSResultGroup, LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { UnoElement } from './UnoElement';

@customElement('wp-container')
export class WpContainer extends UnoElement {
    static styles = [UnoElement.styles, css``];

    @property({ type: String })
    name = 'World';

    @property({ type: Number })
    count = 0;

    private _onClick() {
        this.count++;
    }

    render() {
        return html`
            <div
                class="text-center border-1 border-solid border-green b-rounded px-10 py-10 my-5"
            >
                <h1 class="text-2xl">Hello, ${this.name}!</h1>
                <p class="text-primary-dark dark:text-ternary-light">
                    Recommended IDE:
                    <a
                        class="link__item underline"
                        href="https://code.visualstudio.com/"
                        target="_blank"
                    >
                        VS Code
                    </a>
                </p>
                <p class="text-primary-dark dark:text-ternary-light">
                    See
                    <code class="dark:text-ternary-dark">README.md</code> for
                    more information.
                </p>
                <sl-button class="button" @click=${this._onClick}>
                    Add Count
                </sl-button>
                <p>Click Count: ${this.count}</p>
            </div>
        `;
    }
}

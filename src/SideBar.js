import { html, css, LitElement } from 'lit';

export class SideBar extends LitElement {
  static get styles() {
    return css`
      :host {

      }
    `;
  }

  static get properties() {
    return {
      options: Array
    };
  }

  constructor() {
    super();
    this.options = [];
  }



  render() {
    return html`
        <div class='sidebar'>
          <div class='logo-details'>
            <span class='logo_name'>Hermes Music</span>
          </div>
        </div>
    `;
  }
}

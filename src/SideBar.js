import { html, css, LitElement } from 'lit';

export class SideBar extends LitElement {
  static get styles() {
    return css`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;1,400&display=swap');
      :host {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }
      .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 260px;
        background: #11101d;

      }

      .sidebar .logo-details {

      }

      .sidebar .logo-details .logo_name{

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

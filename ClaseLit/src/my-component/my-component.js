import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle';

export class MyElement extends LitElement {

  constructor(){
    super()
    this.saludo ="Saludo 1"
  }
  static get properties() {
    return {
      saludo: { type: String },
    };
  }  

    static get styles(){
      return[stylesCss]
    }
    cambio(){
      this.saludo="el primer componente"
    }
    render() {
      return html`
        <p class="MyComponents">Soy ${this.saludo}</p>
        <button @click=${(e) => this.cambio()}>cambiar saludo</button>
      `;
    }
  }

  
customElements.define('my-element', MyElement);
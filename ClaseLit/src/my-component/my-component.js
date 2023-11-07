import { LitElement, html } from 'lit-element';
import stylesCss from './my-componentStyle';
import { MyLogin } from '../my-login/my-login';
import { MyRegister } from '../my-register/my-register';

export class MyElement extends LitElement {

  constructor() {
    super()
    this.saludo = "Saludo 1"
    this.componentesHtml = "";
    this.paramComponent = 0;
  }
  static get properties() {
    return {
      saludo: { type: String },
      componentesHtml: { type: String },
      paramComponent: { type: Number }
    };
  }

  static get scopedElements() {
    return {
      "my-login": MyLogin,
      "my-register": MyRegister
    }
  }

  static get styles() {
    return [stylesCss]
  }
  cambio() {
    this.saludo = "el primer componente"
  }

  renderAll() {
    if (this.paramComponent == 1) {
      this.componentesHtml = html`<my-login></my-login>`
    } else {
      this.componentesHtml = html`<my-register></my-register>`
    }
  }

  mostrarComponent() {
    this.paramComponent = 2;
    this.renderAll();
  }

  mostrarLogin(){
      return html`<my-login></my-login>`
  }

  render() {

    this.paramComponent = 1;

    return html`
     ${this.componentesHtml}
     ${this.mostrarLogin()}

     <button @click="${(e) => this.mostrarComponent()}">Registrarse</button>
    `;
  }


}


customElements.define('my-element', MyElement);
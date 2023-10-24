import { LitElement, html } from 'lit-element';



import { MyLogin } from '../my-login/my-login';     

export class MyRendering extends LitElement {
    constructor(){
        super()
        this.isVisible1 =  false;
      }
      static get properties() {
        return {
            isVisible1: { type: Boolean },
        };
      }  

      constructor(){
        super()
        this.isVisible2 = true;
      }
      static get properties() {
        return {
          isVisible2: { type: Boolean },
        };
      }  


    render() {
        return html`
        <div>
            ${this.isVisible1 ? html`<my-login></my-login>` : html``}
            ${this.isVisible2 ? html`<my-register></my-register>` : html``}
            <button @click="${this.togglevisibility}">ver ingresar</button>
        </div>
        `;
    }
    togglevisibility(){
        this.isVisible1 = !this.isVisible1;
        this.isVisible2 = !this.isVisible2;
        this.requestUpdate('isVisible1', !this.isVisible1);
        this.requestUpdate('isVisible2', !this.isVisible2);
    }
}

customElements.define('my-rendering', MyRendering);


class Myregister extends LitElement {

    static get styles(){
      return[stylesCss]
    }
  
    constructor(){
      super()
      this.saludo =""
    }
    static get properties() {
      return {
        saludo: { type: String },
      };
    }  
  
    cambio(){
      this.saludo="Lo siento hasta aca llegan mis conocimientos x2👍"
    }
      render() {
        return html`
          <div class="login">
          <p class="login-p">${this.saludo}</p>
            <h1 class="login-title">Registrar <spam class="title-spot">Usuario.</spam></h1>
              <div class="login-form">
                <ul class="login-ul">
                  <li class="login-li">
                    <label class="login-label" for="usuario">Nombre Usuario <spam class="title-spot">.</spam></label>
                    <input class="login-intput" type="text" id="usuario"/>
                  </li>
                  <li class="login-li">
                    <label class="login-label" for="contraseña">Contraseña <spam class="title-spot">.</spam></label>
                    <input class="login-intput" type="password" id="contraseña"/>
                  </li>
                  <li class="login-li">
                    <label class="login-label" for="contraseña">Confirmar contraseña <spam class="title-spot">.</spam></label>
                    <input class="login-intput" type="password" id="contraseña"/>
                  </li>
                </ul>
                <a class="login-a" href="#">¿Ya tienes una cuenta?</a>
                <button @click=${(e) => this.cambio()} class="login-button" type="submit">Registrar</button>
              </div>
          </div>
        `;
      }
    }
    
  customElements.define('my-register', Myregister);

  class MyLogin extends LitElement {

    static get styles(){
      return[stylesCss]
    }
  
    constructor(){
      super()
      this.saludo =""
    }
    static get properties() {
      return {
        saludo: { type: String },
      };
    }  
  
    cambio(){
      this.saludo="Lo siento hasta aca llegan mis conocimientos👍"
    }
      render() {
        return html`
          <div class="login">
            <p class="login-p">${this.saludo}</p>
            <h1 class="login-title">Iniciar <spam class="title-spot">sesión.</spam></h1>
              <div class="login-form">
                <ul class="login-ul">
                  <li class="login-li">
                    <label class="login-label" for="usuario">Usuario <spam class="title-spot">.</spam></label>
                    <input class="login-intput" type="text" id="usuario"/>
                  </li>
                  <li class="login-li">
                    <label class="login-label" for="contraseña">Contraseña <spam class="title-spot">.</spam></label>
                    <input class="login-intput" type="password" id="contraseña"/>
                  </li>
                </ul>
                <a class="login-a" href="#">Olvide mi contraseña</a>
                <button @click=${(e) => this.cambio()} class="login-button" type="submit">Ingresar</button>
              </div>
          </div>
        `;
      }
    }
    
  customElements.define('my-login', MyLogin);

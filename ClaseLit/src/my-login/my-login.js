import { LitElement, html } from 'lit-element';
import stylesCss from './my-loginStyle'


export class MyLogin extends LitElement {

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



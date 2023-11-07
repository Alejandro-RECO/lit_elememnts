import { LitElement, html } from 'lit-element';
import stylesCss from '../my-login/my-loginStyle'


export class MyRegister extends LitElement {

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
  
customElements.define('my-register', MyRegister);



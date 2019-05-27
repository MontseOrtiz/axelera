<template>
  <div>
    <Navbar/>
    <div>
      <img src="../../assets/Fondo-registro-1.jpg" alt>
      <form class="center">
        <div class="form">
          <div class="cont">
            <h3 class="header">¡ Regístrate !</h3>
            <div class="row">
              <label>
                Nombre(s) y Apellidos
                <span>*</span>
              </label>
              <input class="input" type="text" placeholder required>
            </div>
            <div class="row">
              <label>
                Correo
                <span>*</span>
              </label>
              <input class="input" type="text" placeholder required>
            </div>
            <div class="row">
              <label>
                Contraseña
                <span>*</span>
              </label>
              <input class="input" type="password" placeholder required>
            </div>
            <div class="row">
              <label>
                Confirmar contraseña
                <span>*</span>
              </label>
              <input class="input" type="password" placeholder required>
            </div>
            <div class="row">
              <label>
                Celular
                <span>*</span>
              </label>
              <input class="input" type="text" placeholder required>
            </div>
            <div class="row message">
              <label
                class="verification"
              >Enviaremos un código de verificación por sms a este número.</label>
            </div>
            <div class="terminos-box">
              <input type="checkbox">
              <label class="terminos">
                Acepto las
                <a href="#" target="_blank">políticas de privacidad</a> y los
                <a href="#" target="_blank">términos y condiciones</a> .
              </label>
            </div>

            <div class="row button">
              <button>
                <router-link to="/solicita-tu-credito">Registrarse</router-link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";

export default {
  name: "Registro",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.cont {
  padding-top: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 20vh;
  margin-bottom: 1vh;
  margin-left: 1rem;
  margin-right: 1rem;
  background: white;
}
.header {
  text-align: center;
  color: #745b6f;
  margin-top: 1%;
  margin-bottom: 1rem;
}
img {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
input.input {
  width: 100%;
  margin-bottom: 5px;
}
.row {
  margin: 0;
}
span {
  color: red;
}
button {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 4px 25px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150, 0.72);
}
.button {
  justify-content: center;
}
button a {
  color: black !important;
  text-decoration: none;
  background-color: transparent !important;
}
hr {
  height: 1px;
  color: black;
  background-color: black;
  border: none;
}
.message {
  justify-content: flex-start;
}
.verification {
  padding: 0;
  font-size: 13px;
}
.terminos-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.terminos {
  margin-left: 2%;
  margin-top: 3%;
  font-size: 11px;
}
</style>



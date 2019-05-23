<template>
  <div>
    <Navbar/>
    <form class="container center" @submit.prevent="register">
      <div class="form">
        <div class="container cont">
          <h3 class="header">¡ Regístrate !</h3>
          <div class="row">
            <label>
              Nombre de usuario
              <span>*</span>
            </label>
            <input id="name" type="text" v-model="name" required autofocus>
          </div>
          <div class="row">
            <label>
              Correo
              <span>*</span>
            </label>
            <input id="email" type="email" v-model="email" required>
          </div>
          <div class="row">
            <label>
              Contraseña
              <span>*</span>
            </label>
            <input id="password" type="password" v-model="password" required>
          </div>
          <div class="row">
            <label>
              Confirmar contraseña
              <span>*</span>
            </label>
            <input id="password-confirm" type="password" v-model="password_confirmation" required>
          </div>
          <div class="row">
            <label>
              Celular
              <span>*</span>
            </label>
            <input id="phone" type="phone" v-model="phone" required>
          </div>
          <div class="row message">
            <label class="verification">Enviaremos un código de verificación por sms a este número.</label>
          </div>
          <input type="checkbox">
          <label class="terminos">Acepto los términos y condiciones y las políticas de privacidad.</label>
          <div class="row button">
            <button type="submit">
              <router-link to="/solicita-tu-credito">Registrarse</router-link>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";

export default {
  name: "Registro",
  components: {
    Navbar
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone: ""
    };
  },
  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.cont {
  padding-top: 15px;
  padding-left: 45px;
  padding-right: 45px;
}
.center {
  display: flex;
  justify-content: center;
}
.form {
  /* max-width: 40rem !important; */
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 6rem;
}
.header {
  text-align: center;
  color: #745b6f;
  margin-top: 5%;
  margin-bottom: 1rem;
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
  margin-top: 30px;
  margin-bottom: 30px;
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
.terminos {
  margin-top: 2rem;
  font-size: 11px;
}
</style>



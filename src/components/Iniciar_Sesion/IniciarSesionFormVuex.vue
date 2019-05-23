<template>
  <form class="login" @submit.prevent="login">
    <div class="form">
      <div class="container cont">
        <h5 class="header">INICIAR SESIÓN</h5>
        <p>
          Correo
          <span>*</span>
        </p>
        <div class="row">
          <input required v-model="email" type="email">
        </div>
        <br>
        <p>
          Contraseña
          <span>*</span>
        </p>
        <div class="row">
          <input required v-model="password" type="password" placeholder="Password">
        </div>
        <br>
        <div class="row button">
          <button type="submit">Iniciar Sesión</button>
        </div>
        <div class="a">
          <router-link to="/mail">¿Olvidaste tu contraseña?</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "IniciarSesionFormVuex",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.cont {
  padding: 15px 45px 10px;
  margin-top: 3rem;
}
.center {
  text-align: center;
  margin-top: 15%;
  margin-bottom: 10%;
}
.form {
  background-color: white;
  width: 25rem;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 3rem;
}
.header {
  text-align: center;
  color: #745b6f;
  margin-top: 5%;
  margin-block-end: 10%;
}
input.input {
  width: 100% !important;
}
.row {
  margin: 0;
}
span {
  color: red;
}
button {
  font-size: 1.5rem;
  color: snow !important;
  text-align: center;
  margin-top: 20px;
  /* padding: 4px 25px; */
  padding: 12px 50px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150);
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  */
}
.button {
  justify-content: center;
}
.a {
  margin-top: 15%;
  margin-bottom: 20%;
  text-align: center;
}
button a {
  color: snow !important;
  text-decoration: none;
  background-color: transparent !important;
}
hr {
  height: 1px;
  color: black;
  background-color: black;
  border: none;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 400px) {
  .form {
    background-color: white;
    width: 18rem;
    height: auto;
    border-radius: 15px;
  }
  .cont {
    padding-bottom: 50px;
    /* margin-top: 7rem; */
  }
  .form-body {
    padding: 0;
  }
  .height {
    padding: 0;
  }
}
@media only screen and (min-device-width: 401px) and (max-device-width: 480px) {
  .form {
    background-color: white;
    width: 21rem;
    height: auto;
    border-radius: 15px;
  }
  .cont {
    padding-bottom: 50px;
    /* margin-top: 7rem; */
  }
  .form-body {
    padding: 0;
  }
  .height {
    padding: 0;
  }
}
</style>



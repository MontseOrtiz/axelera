<template>
  <form>
    <div class="form">
      <div class="cont">
        <h5 class="header">INICIAR SESIÓN</h5>
        <label>
          Correo
          <span>*</span>
        </label>
        <div class="row">
          <input class="input" type="text" placeholder>
        </div>
        <br>
        <label>
          Contraseña
          <span>*</span>
        </label>
        <div class="row">
          <input class="input" type="text" placeholder>
        </div>
        <div class="button">
          <button>Iniciar Sesión</button>
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
  name: "IniciarSesionForm"
};
</script>

<style scoped>
.a {
  margin-top: 8%;
  margin-bottom: 2%;
  text-align: center;
}
button {
  color: snow;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button {
  display: flex;
  justify-content: center;
}
button a {
  color: snow !important;
  text-decoration: none;
  background-color: transparent !important;
}
.cont {
  padding: 1rem 2rem;
  margin-top: 3rem;
}
.center {
  text-align: center;
  margin-top: 15%;
  margin-bottom: 10%;
}
.form {
  background-color: white;
  width: 28rem;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 1vh;
  margin-left: 1rem;
  margin-right: 1rem;
}
.header {
  text-align: center;
  color: #745b6f;
  margin-top: 5%;
  margin-block-end: 10%;
}
hr {
  height: 1px;
  color: black;
  background-color: black;
  border: none;
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

@media only screen and (min-device-width: 320px) and (max-device-width: 400px) {
  button {
    font-size: 1rem;
  }
  .form {
    background-color: white;
    width: 18rem;
    height: auto;
    border-radius: 15px;
    margin-bottom: 1vh;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .form-body {
    padding: 0;
  }
  h5 {
    font-size: 20px;
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
    margin-bottom: 1vh;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .form-body {
    padding: 0;
  }
  .height {
    padding: 0;
  }
}
</style>



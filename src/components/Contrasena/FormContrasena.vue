<template>
  <form>
    <div class="form">
      <div class="container cont">
        <h5 class="header">Restablecer contraseña</h5>
        <p>
          Ingresa la nueva contraseña.
          <span>*</span>
        </p>
        <div class="row">
          <input class="input" type="text">
        </div>
        <br>
        <p>
          Confirmar contraseña.
          <span>*</span>
        </p>
        <div class="row">
          <input class="input" type="text">
        </div>
        <div class="row button">
          <button>
            <router-link to="/iniciar-sesion">Enviar</router-link>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormContrasena"
};
</script>

<style scoped>
.cont {
  padding-top: 15px;
  padding-left: 45px;
  padding-right: 45px;
}
p {
  text-align: justify;
}
.form {
  background-color: white;
  width: 25rem;
  height: 22rem;
  border-radius: 15px;
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
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 4px 25px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150, 0.72);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button {
  justify-content: center;
}
div a {
  color: black !important;
  text-decoration: none;
  background-color: transparent !important;
}
</style>



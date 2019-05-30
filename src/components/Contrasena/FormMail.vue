<template>
  <form>
    <div class="form">
      <div class="container cont">
        <h5 class="header">¿Olvidaste tu contraseña?</h5>
        <p>
          Por favor, introduce tu correcto electrónico para enviarte instrucciones para restablecer tu contraseña.
          <span>*</span>
        </p>
        <div class="row">
          <input class="input" type="text">
        </div>
        <div class="row button">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormMail"
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
  height: 20rem;
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
</style>



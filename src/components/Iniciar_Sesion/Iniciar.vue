<template>
  <div>
    <Navbar/>
    <div class="fondo">
      <img src="../../assets/fondo-inicia.jpg" alt>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 item">
          <IniciarSesionForm/>
          <!-- <IniciarSesionFormVuex/> -->
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 item">
          <div class="register">
            <h1>¿Aún no estás registrado?</h1>
            <div class="button">
              <button>
                <router-link to="/registro">¡Regístrate Aquí!</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import IniciarSesionForm from "./IniciarSesionForm.vue";
// import IniciarSesionFormVuex from "./IniciarSesionFormVuex";

export default {
  name: "Iniciar",
  components: {
    Navbar,
    IniciarSesionForm
  }
};
</script>

<style scoped>
.fondo {
  background-color: aqua;
  /* background-image: url(../../); */
}
h1 {
  color: #3c3850;
  text-align: center;
}
.form {
  display: flex;
  justify-content: center;
  padding-top: 4rem;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  padding: 12px 50px;
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
.row {
  margin-top: 7rem;
}
.register {
  margin-bottom: 2rem;
}
</style>



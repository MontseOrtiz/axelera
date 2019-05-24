<template>
  <div>
    <Navbar/>
    <div>
      <img src="../../assets/fondo-inicia.jpg" alt>
      <div class="cont-prin">
        <div class="item item1">
          <IniciarSesionForm/>
          <!-- <IniciarSesionFormVuex/> -->
        </div>
        <div class>
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
h1 {
  color: #3c3850;
  text-align: center;
}
img {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.item {
  display: flex;
  justify-content: center;
}

button {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
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

.cont-prin {
  /* margin-top: 73.09px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.register {
  margin-bottom: 2rem;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 360px) {
  button {
    font-size: 1rem;
  }
  h1 {
    font-size: 31px;
    margin-top: 10p;
  }
}

@media only screen and (min-device-width: 300px) and (max-device-width: 1049px) {
  .cont-prin {
    margin-top: 5vh;
  }
}
@media only screen and (min-device-width: 1050px) and (max-device-width: 2400px) {
  .item1 {
    margin-top: 20vh;
    margin-right: 10vw;
  }
}
</style>



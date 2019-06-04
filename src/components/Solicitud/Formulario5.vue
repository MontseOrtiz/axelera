<template>
  <div>
    <Navbar/>
    <section class="form5">
      <div class="cont-color" :style="myStyle">
        <form class="form">
          <p class="p col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante.
            <span>*</span>
          </p>
          <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Paso 5 de 5</label>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <b-form-input
              id="range-2"
              class="input"
              v-model="value"
              type="range"
              min="0"
              max="5"
              step="1"
            ></b-form-input>
          </div>
          <h4 class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Documentos</h4>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Identificación Oficial
                <span class="span">*</span>
              </p>
              <input class="archivo" type="file" required>
              <br>
              <span>(IFE, INE, Pasaporte)</span>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Comprobante de domicilio
                <span class="span">*</span>
              </p>
              <input class="archivo" type="file" required>
            </div>
          </div>
          <br>
          <div class="button">
            <button>
              <router-link class="dropdown-item" to="/solicita-tu-credito-4">Regresar</router-link>
            </button>
            <button>
              <router-link class="dropdown-item" to="/">Enviar</router-link>
            </button>
          </div>
          <p
            class="p"
          >Toda la información antes proporcionada es confidencial, usada solamente para el proceso de solicitud de financiamiento de CREDITEA, SAPI de C.V. SOFOM ENR y no será compartida con terceros. Para dar continuidad a tu solicitud, puedes hacerlo en: hola@axelera.credit</p>
        </form>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import Footer from "../Footer/Footer.vue";
export default {
  name: "Formulario5",
  data() {
    return {
      myStyle: {
        backgroundColor: "rgb(156, 133, 150, .72)"
      },
      value: "5"
    };
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.archivo {
  width: 100%;
}
a {
  color: black !important;
  text-decoration: none;
  background-color: transparent !important;
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
button {
  text-align: center;
  margin: 1rem 0.5rem;
  padding: 9px 25px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150, 0.72);
}
.cont-color {
  padding: 2%;
  border-radius: 15px;
  width: 90vw;
}

.form5 {
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  width: 100%;
  margin-top: 10%;
}
.form {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
}
h4 {
  color: #745b6f;
  margin: 3% 0;
}
label {
  font-size: 11px;
}
.p {
  font-size: 14px;
  text-align: justify;
}
.span {
  color: red;
}
select {
  width: 100%;
}

span {
  font-size: 11px;
}
.row {
  margin: 0;
}

.input[type="range"] {
  height: 8px;
  margin-bottom: 2%;
  border-radius: 15px;
}
.input[type="range"]::-webkit-slider-thumb {
  width: 15px;
  height: 15px;
  background: #988095;
  cursor: pointer;
  border-radius: 15px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 556px) {
  .cont-color {
    margin-top: 5rem;
  }
}
@media only screen and (min-device-width: 100px) and (max-device-width: 400px) {
  button {
    text-align: center;
    margin: 3rem 0.5rem;
    padding: 9px 1vw;
    border: 0;
    border-radius: 5px;
    background-color: rgb(156, 133, 150, 0.72);
  }
}
</style>



<template>
  <div>
    <Navbar/>
    <SolicitudImagen/>
    <section class="form1">
      <div class="cont-color" :style="myStyle">
        <form class="form">
          <p class="p col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante.
            <span>*</span>
          </p>
          <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Paso 1 de 5</label>
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
          <h4
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
          >Déjanos ayudarte. Por favor ingresa tus datos para estar en contacto.</h4>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>
              Nombre
              <span>*</span>
            </p>
            <input class="input" type="text" required>
            <br>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Apellido Paterno
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <br>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Apellido Materno
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Email
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <br>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Celular
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
          </div>
          <br>
          <div>
            <p class="p col-xs-12 col-sm-12 col-md-12 col-lg-12">
              Por este conducto autorizo expresamente a CREDITEA, SAPI DE C.V. SOFOM, E.N.R., para que por conducto de sus funcionarios facultados lleve a cabo Investigaciones, sobre mi comportamiento crediticio o el de la Empresa que represento en Círculo de Crédito S.A. de C.V. SIC En caso de que la solicitante sea una Persona Moral, declaro bajo protesta de decir verdad Ser Representante Legal de la empresa mencionada en esta autorización; manifestando que a la fecha de envio de la presente autorización los poderes no me han sido revocados, limitados, ni modificados en forma alguna.
              <span>*</span>
            </p>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <select class="select-chart">
                <option value="sí">Sí</option>
                <option value="no">No</option>
              </select>
              <br>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 button">
              <button type="submit">
                <router-link to="/solicita-tu-credito-2">Avanzar</router-link>
              </button>
            </div>
            <br>
          </div>
          <br>
          <p
            class="p col-xs-12 col-sm-12 col-md-12 col-lg-12"
          >Toda la información antes proporcionada es confidencial, usada solamente para el proceso de solicitud de financiamiento de CREDITEA, SAPI de C.V. SOFOM ENR y no será compartida con terceros. Para dar continuidad a tu solicitud, puedes hacerlo en: hola@axelera.credit</p>
        </form>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import SolicitudImagen from "./SolicitudImagen.vue";
import Footer from "../Footer/Footer.vue";

export default {
  name: "Formulario1",
  data() {
    return {
      myStyle: {
        backgroundColor: "rgb(156, 133, 150, .72)"
      },
      value: "1"
    };
  },
  components: {
    Navbar,
    SolicitudImagen,
    Footer
  }
};
</script>

<style scoped>
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
  padding: 9px 25px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150, 0.72);
}
.cont-color {
  padding: 2%;
  border-radius: 15px;
  margin-top: 10%;
  width: 90vw;
}
.form1 {
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  width: 100%;
  display: flex;
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
input {
  width: 100%;
}
label {
  font-size: 11px;
}
.p {
  font-size: 14px;
  text-align: justify;
}
.row {
  margin: 0;
}
span {
  color: red;
}
select {
  width: 100%;
  height: 31px;
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

@media only screen and (min-device-width: 300px) and (max-device-width: 768px) {
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
  }
}
</style>



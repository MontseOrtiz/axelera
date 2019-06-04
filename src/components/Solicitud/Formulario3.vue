<template>
  <div>
    <Navbar/>
    <section class="form3">
      <div class="cont-color" :style="myStyle">
        <form class="form">
          <p class="p col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante.
            <span>*</span>
          </p>
          <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Paso 3 de 5</label>
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
          <h4 class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Domicilio Actual</h4>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Avenida / Calle
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <p>
                Número Exterior
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <p>Número Interior</p>
              <input class="input" type="text">
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Colonia
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Delegación / Municipio
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
          </div>
          <br>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>
              Estado
              <span>*</span>
            </p>
            <div class="row">
              <select>
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="CDMX">CDMX</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Coahuila de Zaragoza">Coahuila de Zaragoza</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Estado de México">Estado de México</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Michoacán de Ocampo">Michoacán de Ocampo</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo León">Nuevo León</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Querétaro">Querétaro</option>
                <option value="Quintana Roo">Quintana Roo</option>
                <option value="San Luis Potosí">San Luis Potosí</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Sonora">Sonora</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz de Ignacio de la Llave">Veracruz de Ignacio de la Llave</option>
                <option value="Yucatán">Yucatán</option>
                <option value="Zacatecas">Zacatecas</option>
              </select>
            </div>
            <br>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Ciudad
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Código Postal
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
                País
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Tiempo de residir en domicilio actual
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <label>(si es menor a un año especificar domicilio anterior)</label>
            </div>
          </div>
          <div class="button">
            <button>
              <router-link class="dropdown-item" to="/solicita-tu-credito-2">Regresar</router-link>
            </button>
            <button>
              <router-link class="dropdown-item" to="/solicita-tu-credito-4">Avanzar</router-link>
            </button>
          </div>
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
import Footer from "../Footer/Footer.vue";

export default {
  name: "Formulario3",
  data() {
    return {
      myStyle: {
        backgroundColor: "rgb(156, 133, 150, .72)"
      },
      value: "3"
    };
  },
  components: {
    Navbar,
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
  margin: 3rem 0.5rem;
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
.form3 {
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  width: 100%;
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
.select-chart {
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



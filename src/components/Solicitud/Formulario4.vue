<template>
  <div>
    <Navbar/>
    <section class="form4">
      <div class="cont-color" :style="myStyle">
        <form class="form">
          <p class="p col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante.
            <span>*</span>
          </p>
          <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Paso 4 de 5</label>
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
          <h4 class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Datos Laborales</h4>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>
              Nombre de la empresa donde trabaja
              <span>*</span>
            </p>
            <input class="input" type="text" required>
            <br>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Antigüedad laboral
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Frecuencia de pago
                <span>*</span>
              </p>
              <select>
                <option value="Semanal">Semanal</option>
                <option value="Catorcenal">Catorcenal</option>
                <option value="Quincenal">Quincenal</option>
                <option value="Mensual">Mensual</option>
              </select>
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Puesto
                <span>*</span>
              </p>

              <input class="input" type="text" required>

              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Correo electrónico del trabajo
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
                Jefe Inmediato
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Saldo Mensual
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>
                Monto solicitado
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
                Plazo requerido
                <span>*</span>
              </p>
              <select>
                <option value="6 Meses">6 Meses</option>
                <option value="12 Meses">12 Meses</option>
                <option value="18 Meses">18 Meses</option>
                <option value="24 Meses">24 Meses</option>
              </select>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Destino de crédito
                <span>*</span>
              </p>
              <select>
                <option value="Negocio">Negocio</option>
                <option value="Deuda">Deuda</option>
                <option value="Oportunidad">Oportunidad</option>
                <option value="Emergencia">Emergencia</option>
                <option value="Vacaciones">Vacaciones</option>
                <option value="Otro.">Otro.</option>
              </select>
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <p>
                Cuenta bancaria
                <span>*</span>
              </p>

              <input class="input" type="text" required>
              <label>(Cuenta donde recibes tu nómina)</label>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <p>
                Banco
                <span>*</span>
              </p>
              <div class="row">
                <input class="input" type="text" required>
              </div>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <p>
                Clabe
                <span>*</span>
              </p>
              <input class="input" type="text" required>
              <label>(18 dígitos)</label>
            </div>
          </div>
          <div class="button">
            <button>
              <router-link class="dropdown-item" to="/solicita-tu-credito-3">Regresar</router-link>
            </button>
            <button>
              <router-link class="dropdown-item" to="/solicita-tu-credito-5">Avanzar</router-link>
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
  name: "Formulario4",
  data() {
    return {
      myStyle: {
        backgroundColor: "rgb(156, 133, 150, .72)"
      },
      value: "4"
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
  margin: 1rem 0.5rem;
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
.form4 {
  display: flex;
  justify-content: center;
  width: 100%;

  margin-bottom: 5%;
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
span {
  color: red;
}
select {
  width: 100%;
  height: 31px;
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



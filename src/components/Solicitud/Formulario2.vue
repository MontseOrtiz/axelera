<template>
  <div>
    <Navbar/>
    <section class="form2">
      <div class="cont-color" :style="myStyle">
        <form class="form">
          <p class="p col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Por favor, ten a la mano tu identificación y comprobante de domicilio escaneados, los vamos a necesitar mas adelante.
            <span
              class="span"
            >*</span>
          </p>
          <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Paso 2 de 5</label>
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
          <h4 class="col-xs-12 col-sm-12 col-md-12 col-lg-12">Datos Generales</h4>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                RFC con HOMOCLAVE
                <span class="span">*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                CURP
                <span class="span">*</span>
              </p>
              <input class="input" type="text" required>
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>Tipo y No. De Forma Migratoria (sólo extranjeros)</p>
              <input class="input" type="text">
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Fecha de Nacimiento
                <span class="span">*</span>
              </p>
              <select class="select-chart">
                <option class="placeholder" selected disabled>DD</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <span>/</span>
              <select class="select-chart">
                <option class="placeholder" selected disabled>MM</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <span>/</span>
              <select class="select-chart">
                <option class="placeholder" selected disabled>YYYY</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
              </select>
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Entidad Federativa de Nacimiento
                <span class="span">*</span>
              </p>
              <select class="select">
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

              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Estado Civil
                <span class="span">*</span>
              </p>
              <select class="select">
                <option value="Soltero/a.">Soltero/a.</option>
                <option value="Comprometido/a.">Comprometido/a.</option>
                <option value="Casado/a.">Casado/a.</option>
                <option value="Divorciado/a.">Divorciado/a.</option>
                <option value="Viudo/a.">Viudo/a.</option>
              </select>
              <br>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Género
                <span class="span">*</span>
              </p>
              <select class="select">
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
              </select>
              <br>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>
                Teléfono Fijo
                <span class="span">*</span>
              </p>

              <input class="input" type="text" required>
            </div>
          </div>
          <br>
          <div class="button">
            <button>
              <router-link class="dropdown-item" to="/solicita-tu-credito">Regresar</router-link>
            </button>
            <button>
              <router-link class="dropdown-item" to="/solicita-tu-credito-3">Avanzar</router-link>
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
  name: "Formulario2",
  data() {
    return {
      myStyle: {
        backgroundColor: "rgb(156, 133, 150, .72)"
      },
      value: "2"
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
.form2 {
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
.span {
  color: red;
}
span {
  margin: 7px;
}
.row {
  margin: 0;
}

.select {
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



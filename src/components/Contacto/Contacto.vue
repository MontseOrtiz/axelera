<template>
  <div>
    <Navbar/>
    <section class="container">
      <h4 class="header">CONTACTO</h4>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div class="container">
              <div class="row">
                <p>Prolongación Paseo de la Reforma 1015, Piso 9, Edificio B, Punta Santa Fe, Col. Desarrollo Santa Fe, CP 01376, Mexico DF.</p>
                <p>Tel +52 (55) 2589-7161</p>
              </div>
              <br>
              <div class="row">
                <p>
                  NOMBRE
                  <span>*</span>
                </p>
              </div>
              <div class="row row-space">
                <input class="col-5" type="text" placeholder="Nombre(s)">
                <input class="col-5" type="text" placeholder="Apellido(s)">
              </div>
              <br>
              <div class="row">
                <p>
                  CORREO
                  <span>*</span>
                </p>
              </div>
              <div class="row">
                <input type="text" class="col-12">
              </div>
              <br>
              <div class="row">
                <p>
                  MENSAJE
                  <span>*</span>
                </p>
              </div>
              <div class="row">
                <textarea cols="120" rows="5"></textarea>
              </div>
              <div class="row">
                <button>Enviar</button>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 div-map">
            <img src="../../assets/mapa.png" alt="mapa">
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import Footer from "../Footer/Footer.vue";

export default {
  name: "contacto",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 4px 25px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150, 0.72);
}
.header {
  text-align: left;
  color: #745b6f;
  margin-top: 10%;
}
.row-space {
  justify-content: space-between;
}
section {
  margin-bottom: 5%;
}
span {
  color: red;
}
img {
  width: 33rem;
  height: 30rem;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 490px) {
  section {
    margin-bottom: 10%;
    padding-top: 3rem;
  }
  .div-map {
    width: 100%;
    margin-top: 10%;
  }
  img {
    width: 100%;
    height: auto;
  }
}
@media only screen and (device-width: 768px) {
  .div-map {
    margin-top: 5%;
  }
  img {
    width: 100%;
    height: auto;
  }
  .row-space {
    justify-content: space-between;
  }
  textarea {
    width: 100%;
  }
}
</style>



<template>
  <section class="container-fluid background-image">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center text">
        <div class="header">
          <div class="container">
            <h1>Préstamos personales hasta $150,000</h1>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 calculadora">
        <div>
          <Calculadora/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Calculadora from "./Calculadora.vue";

export default {
  name: "BackgroundCalculator",
  components: {
    Calculadora
  }
};
</script>

<style scoped>
.background-image {
  margin-top: 73.09px;
  background-image: url("../../assets/axelerahero.jpg");
  width: 100vw;
  height: auto;
  background-size: cover;
  background-position: bottom;
}
.calculadora {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.container {
  padding: 20px 55px;
  width: 100%;
}

h1 {
  font-size: 4.5vw;
  color: snow;
  font-weight: bolder;
}

@media only screen and (max-device-width: 320px) and (max-device-width: 490px) {
  .calculadora {
    margin-top: 1rem;
  }
  .container {
    padding: 1rem !important;
    width: 100%;
  }
  h1 {
    font-size: 7vw;
  }
}

@media only screen and (max-device-width: 491px) and (max-device-width: 1024px) {
  .calculadora {
    margin-top: 1rem;
  }
  h1 {
    font-size: 7vw;
  }
}
</style>

<template>
  <div class="section">
    <header>
      <h4 class="header">¿QUÉ NECESITO PARA SOLICITAR MI CRÉDITO?</h4>
    </header>
    <section class="container">
      <div class="row">
        <div class="card">
          <div class="image-center">
            <img
              src="../../assets/identificación.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">IDENTIFICACIÓN OFICIAL</h5>
          </div>
        </div>
        <div class="card">
          <div class="image-center">
            <img
              src="../../assets/comprobante.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">COMPROBANTE DE DOMICILIO VIGENTE</h5>
          </div>
        </div>
        <div class="card">
          <div class="image-center">
            <img
              src="../../assets/edad.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">TENER ENTRE 18 Y 60 AÑOS</h5>
          </div>
        </div>
        <div class="card last-card">
          <div class="image-center">
            <img
              src="../../assets/laboral.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">ANTIGÜEDAD LABORAL MÍNIMA 6 MESES</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Requisitos"
};
</script>

<style scoped>
.header {
  text-align: center;
  color: snow;
  padding-top: 4rem;
}
.card {
  margin-bottom: 10px;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  width: 100%;
  max-width: 15rem;
}

.img {
  width: 100px;
}
.image-center {
  display: flex;
  justify-content: center;
  height: 100px;
}
.card-title {
  color: #3c3850;
  text-align: center;
  margin-top: 1rem;
}
.last-card {
  padding-bottom: 10px;
}
.row {
  margin-top: 5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
.section {
  margin: auto;
  height: auto;
  background-color: #a2859a;
}
@media only screen and (min-device-width: 300px) and (max-device-width: 490px) {
  .card {
    max-width: 20rem;
  }
  .section {
    height: auto;
    margin-bottom: 15%;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1199px) {
  .card {
    margin-left: 0.05rem;
    margin-right: 0.05rem;
  }
  .section {
    height: auto;
  }
}
</style>



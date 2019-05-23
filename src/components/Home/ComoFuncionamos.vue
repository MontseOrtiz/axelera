<template>
  <div class="section">
    <header>
      <h4 class="header">¿CÓMO FUNCIONAMOS?</h4>
    </header>
    <section class="container">
      <div class="row">
        <div class="card" style="max-width: 15rem;">
          <div class="image-center">
            <img
              src="../../assets/solicita_tu_credito.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">SOLICITA TU CRÉDITO EN LÍNEA</h5>
            <hr>
            <p
              class="card-text"
            >Completa el formulario de solicitud y adjunta tus documentos , únicamente necesitamos tu identificación oficial y comprobante de domicilio.</p>
          </div>
        </div>
        <div class="card" style="max-width: 15rem;">
          <div class="image-center">
            <img
              src="../../assets/analizamos_tu_informacion.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">ANALIZAMOS TU INFORMACIÓN</h5>
            <hr>
            <p
              class="card-text"
            >Validamos de forma muy ágil tu información y te enviamos una propuesta.</p>
          </div>
        </div>
        <div class="card" style="max-width: 15rem;">
          <div class="image-center">
            <img
              src="../../assets/Firma_tu_contrato.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">FIRMA TU CONTRATO</h5>
            <hr>
            <p
              class="card-text"
            >! Olvidate del papel ¡ firma tu contrato de forma digital desde nuestra plataforma.</p>
          </div>
        </div>
        <div class="card" style="max-width: 15rem;">
          <div class="image-center">
            <img
              src="../../assets/recibe_el_dinero.png"
              class="card-img-top img"
              alt="Logotipo que hace referencia a la sección de solicita tu crédito"
            >
          </div>
          <div class="card-body">
            <h5 class="card-title horas">RECIBE EL DINERO EN MENOS DE 24 HORAS</h5>
            <hr>
            <p
              class="card-text"
            >Una vez recibida tu documentación en menos de 24 horas te depositamos tu crédito en la cuenta bancaria donde recibes tu nómina.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComoFuncionamos"
};
</script>

<style scoped>
.header {
  text-align: center;
  color: #745b6f;
  margin-top: 5%;
}
.container {
  height: 90%;
}
.card {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.horas {
  font-size: 1.2rem;
}
.img {
  width: 130px;
}
.image-center {
  display: flex;
  justify-content: center;
  height: 130px;
  margin-top: 1rem;
}
.card-title {
  color: #3c3850;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
.row {
  margin-top: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.section {
  height: auto;
  padding-bottom: 3rem;
}

hr {
  height: 1px;
  color: #988095;
  background-color: #988095;
  border: none;
}
@media only screen and (device-width: 768px) {
  .section {
    margin-bottom: 15%;
  }
  .card {
    margin-left: 3.7rem;
    margin-right: 3.7rem;
    border: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

@media only screen and (min-device-width: 300px) and (max-device-width: 490px) {
  .section {
    height: auto;
    margin-bottom: 15%;
  }
}
@media only screen and (min-device-width: 491px) and (max-device-width: 1100px) {
  .section {
    height: auto;
    margin-bottom: 10%;
  }
}
</style>



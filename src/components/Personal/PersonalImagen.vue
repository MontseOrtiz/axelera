<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="container cont">
          <h3 class="h3">AXELERA</h3>
          <h3>PERSONAL</h3>
          <hr>
          <p>Crédito personalizado que puedes solicitar en línea de manera ágil, rápida y sencilla. Ofrecemos tasas competitivas, no cobramos comisiones ni solicitamos aval. La tasa de interés es fija y los plazos son flexibles. Nuestros créditos están asegurados en caso de fallecimiento, invalidez total o permanente.</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding">
        <img src="../../assets/personal_1.jpg">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PersonalImagen"
};
</script>

<style scoped>
.container-fluid {
  margin-top: 9rem;
}
.cont {
  padding-left: 8%;
  padding-right: 8%;
}

.h3 {
  margin-bottom: 0;
}
h3 {
  color: #745b6f;
}
hr {
  margin-top: 7%;
  margin-bottom: 12%;
  height: 1px;
  color: #3c3850;
  background-color: #3c3850;
  border: none;
}

img {
  width: 100%;
}
p {
  color: #3c3850;
  font-size: 1rem;
}
.no-padding {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
@media only screen and (min-device-width: 200px) and (max-device-width: 763px) {
  img {
    width: 80vw;
  }
  .row {
    margin-top: 6%;
  }
}
@media only screen and (device-width: 768px) {
  .row {
    margin-top: 6%;
  }
}
</style>

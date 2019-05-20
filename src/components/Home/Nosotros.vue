<template>
  <div class="seccion">
    <section class="container">
      <div class="image">
        <img src="../../assets/axelera_logo.png" alt="logo de axelera">
      </div>
      <p
        class="text"
      >Axelera es una empresa mexicana enfocada en ofrecer soluciones financieras a los trabajadores de cualquier empresa de forma ágil, sencilla y personalzada.</p>
      <p
        class="text"
      >Entendemos que pedir un crédito suele ser un proceso largo y complicado, por eso nuestro compromiso es ofrecerte una experiencia amigable y darte respuesta en menos de 24 horas.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Nosotros"
};
</script>



<style scoped>
/* .container {
  padding: 2rem 15rem;
} */
.text {
  color: #745b6f;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: x-large;
  font-weight: bold;
  font-stretch: extra-expanded;
}
.seccion {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.7rem;
  margin-bottom: 1.7rem;
}
img {
  width: 140px;
}
/* @media only screen and (min-device-width: 320px) and (max-device-width: 490px) {
  .seccion {
    height: auto;
    margin-bottom: 20%;
  }
}
@media only screen and (device-width: 768px) {
  .seccion {
    height: 35vh;
  }
} */
</style>




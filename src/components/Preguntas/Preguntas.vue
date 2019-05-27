<template>
  <div>
    <Navbar/>
    <section class="container">
      <h4 class="header">PREGUNTAS FRECUENTES</h4>
      <h5 class="title">CRÉDITO</h5>
      <hr class="hr">
      <div>
        <b-link v-b-toggle.collapse-1 class="m-1">
          <p>+ ¿POR QUÉ SOLICITAR MI CRÉDITO CON AXELERA?</p>
        </b-link>
        <b-collapse id="collapse-1" class="text">
          <b-p>En Axelera entendemos que las oportunidades no esperan, obtén tu crédito de forma ágil y sencilla en menos de 24 horas.</b-p>
        </b-collapse>
      </div>
      <div>
        <b-link v-b-toggle.collapse-2 class="m-1">
          <p>+ ¿CUÁL ES EL PROCESO PARA RECIBIR MI CRÉDITO?</p>
        </b-link>
        <b-collapse id="collapse-2" class="text">
          <ul>
            <li>Solicita tu crédito en línea</li>
            <li>Firma tu contrato de manera digital en cualquier dispositivo</li>
            <li>Recibe el dinero en menos de 24 horas</li>
          </ul>
        </b-collapse>
      </div>
      <div>
        <b-link v-b-toggle.collapse-3 class="m-1">
          <p>+ ¿CONSULTAN BURÓ DE CRÉDITO?</p>
        </b-link>
        <b-collapse id="collapse-3" class="text">
          <b-p>Sí lo consultamos, aunque tomamos en cuenta otros factores que no se limitan únicamente al estudio de Buró de Crédito.</b-p>
        </b-collapse>
      </div>
      <div>
        <b-link v-b-toggle.collapse-4 class="m-1">
          <p>+ MONTOS Y PLAZOS</p>
        </b-link>
        <b-collapse id="collapse-4" class="text">
          <b-p>Te prestamos desde $3,000 y hasta $150,000 pesos. Tu eliges el plazo hasta por 48 quincenas.</b-p>
        </b-collapse>
      </div>
      <div>
        <b-link v-b-toggle.collapse-5 class="m-1">
          <p>+ REQUISITOS</p>
        </b-link>
        <b-collapse id="collapse-5" class="text">
          <ul>
            <li>Identificación Oficial</li>
            <li>Tener entre 18 y 60 años</li>
            <li>Antigüedad laboral mínima de 6 meses</li>
            <li>Trabajar en una empresa con la que tengamos convenio</li>
          </ul>
        </b-collapse>
      </div>
      <br>
      <div>
        <h5 class="title">TIEMPO</h5>
        <hr class="hr">
        <b-link v-b-toggle.collapse-6 class="m-1">
          <p>+ ¿CUÁNTO TIEMPO TARDAN EN PROCESAR MI SOLICITUD?</p>
        </b-link>
        <b-collapse id="collapse-6" class="text">
          <b-p>Una vez recibida toda la información necesaria podrás disponer de tu crédito en menos de 24 horas.</b-p>
        </b-collapse>
      </div>
      <br>
      <div>
        <h5 class="title">PAGOS</h5>
        <hr class="hr">
        <b-link v-b-toggle.collapse-7 class="m-1">
          <p>+ ¿PUEDO PAGAR ANTICIPADAMENTE?</p>
        </b-link>
        <b-collapse id="collapse-7" class="text">
          <b-p>Sí, podrás hacer pagos anticipados a tu crédito sin penalización alguna.</b-p>
        </b-collapse>
      </div>
      <br>
      <div>
        <h5 class="title">GARANTÍA</h5>
        <hr class="hr">
        <b-link v-b-toggle.collapse-8 class="m-1">
          <p>+ ¿PIDEN GARANTÍA?</p>
        </b-link>
        <b-collapse id="collapse-8" class="text">
          <b-p>Confiamos en las personas, nosotros no pedimos aval ni garantía.</b-p>
        </b-collapse>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";

export default {
  name: "Preguntas",
  components: {
    Navbar
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleInfo() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  color: #745b6f;
  margin-top: 10%;
}
.title {
  color: #988095;
}
.hr {
  height: 1px;
  color: #988095;
  background-color: #988095;
  border: none;
}
.m-1 {
  color: #745b6f;
  font-weight: 600;
}
section {
  margin-bottom: 10%;
}
section a {
  text-decoration: none;
}
.text {
  margin-bottom: 1.5rem;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 998px) {
  section {
    margin-bottom: 10%;
    padding-top: 4rem;
  }
  h4 {
    margin-bottom: 10%;
  }
}
</style>



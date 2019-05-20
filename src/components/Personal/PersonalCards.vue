<template>
  <section class="section">
    <div class="container-1">
      <div class="border card">
        <div class="container">
          <h5>CARACTERÍSTICAS</h5>
          <p>Plazo: De 12 a 48 quincenas.</p>
          <p>Formas de pago: Descuento vía nómina.</p>
          <p>Periodicidad de pago: Quincenal, catorcenal, mensual o semanal.</p>
          <p>Monto del crédito: Desde $3,000.00 hasta $150,000.00 pesos (moneda nacional).</p>
          <p>Pagos fijos con amortizaciones a capital e intereses.</p>
          <p>Pagos anticipados sin penalización.</p>
        </div>
      </div>
      <div class="border card">
        <div class="container">
          <h5>REQUISITOS</h5>
          <p>Identificación Oficial.</p>
          <p>Comprobante de domicilio vigente (no mayor a 2 meses de su emisión).</p>
          <p>Tener entre 18 y 60 años.</p>
          <p>Antigüedad laboral mínima de 6 meses.</p>
          <p>Trabajar en una empresa con la que tengamos convenio.</p>
        </div>
      </div>
      <div class="border card">
        <div class="container">
          <h5>BENEFICIOS PARA EL TRABAJADOR</h5>
          <p>Sin aval.</p>
          <p>Sin garantía.</p>
          <p>Sin comisión de apertura.</p>
          <p>Proceso de contratación ágil.</p>
          <p>Atención personalizada.</p>
          <p>Respuesta en menos de 24 horas.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PersonalCards"
};
</script>

<style scoped>
.border {
  border-color: black !important;
}
.card {
  padding: 20px;
  width: 20rem;
  height: 30rem;
  margin: auto;
  margin-top: 15px;
}
.container-1 {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

h5 {
  text-align: center;
  color: #745b6f;
  margin-bottom: 10%;
}
.section {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>



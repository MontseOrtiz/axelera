<template>
  <section class="section">
    <div class="container-1">
      <div class="border card">
        <div class="container">
          <h5 class="titulo">CARACTERÍSTICAS</h5>
          <p>Hasta un mes de sueldo por adelantado.</p>
          <p>Pagos anticipados sin penalización.</p>
          <p>Puede renovarse automáticamente si asi lo solicitas.</p>
        </div>
      </div>
      <div class="border card">
        <div class="container">
          <h5 class="titulo">REQUISITOS</h5>
          <p>Identificación Oficial.</p>
          <p>Comprobante de domicilio vigente (no mayor a 2 meses de su emisión).</p>
          <p>Tener entre 18 y 60 años.</p>
          <p>Antigüedad laboral mínima de 3 meses.</p>
          <p>Trabajar en una empresa con la que tengamos convenio.</p>
        </div>
      </div>
      <div class="border card">
        <div class="container">
          <h5>BENEFICIOS PARA EL TRABAJADOR</h5>
          <p>Liquidez inmediata.</p>
          <p>Sin comisión de apertura.</p>
          <p>Proceso de contratación ágil.</p>
          <p>Atención personalizada.</p>
          <p>Respuesta en menos de 24 horas.</p>
          <p>Al ser un adelanto de nómina no genera endeudamiento.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>



<style scoped>
.border {
  border-color: black !important;
}
.card {
  padding: 20px;
  width: 20rem;
  height: 25rem;
  margin: auto;
  margin-top: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

.titulo {
  padding-top: 0.5rem;
  padding-bottom: 0.8rem;
}
</style>


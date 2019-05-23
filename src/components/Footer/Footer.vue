<template>
  <footer class="footer">
    <div class="row">
      <div class="general">
        <div class="row first">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <img src="../../assets/axelera_blanco_2.png">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 social-icons">
            <img class="icons" src="../../assets/001-facebook.png">
            <img class="icons" src="../../assets/LinkedIn.png">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <p class="header">CREDITEA, SAPI DE C.V. SOFOM, E.N.R.</p>
            <p
              class="justify"
            >Para su constitución y operación no requiere autorización de la Secretaría de Hacienda y Crédito Público, y está sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto por el artículo 56 de la Ley General de Organizaciones y Actividades Auxiliares del Crédito.</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <p>Encuéntranos en:</p>
            <p
              class="justify"
            >Prolongación Paseo de la Reforma 1015, Piso 9, Edificio B, Punta Santa Fe, Col. Desarrollo Santa Fe, CP 01376 , México DF.</p>
            <p>Tel +52 (55) 2589-7161</p>
          </div>
          <div class="col-md-4 aviso">
            <a class="right" href="#" target="_blank">Aviso de privacidad</a>
            <a class="right" href="#" target="_blank">Términos y condiciones</a>

            <img class="tres-icons" src="../../assets/axelera_31.jpg">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
a {
  color: #5f727f;
  margin-top: 2%;
  margin-bottom: 4%;
}
.aviso {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.footer {
  background-color: #dddddd;
  position: relative;
}
.first {
  padding-bottom: 2rem;
}
.general {
  background-color: #dddddd;
  margin-top: 30px;
  margin-left: 3%;
  margin-right: 3%;
}
.icons {
  width: 25px;
  height: 30px;
  margin-right: 1rem;
}
.justify {
  text-align: justify;
}
p {
  color: #5f727f;
}
.right {
  text-align: right;
}

.row {
  margin: 0;
}
.tres-icons {
  align-self: flex-end;
  width: 230px;
  right: 6%;
  bottom: 8%;
}
.social-icons {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-self: center;
}
</style>



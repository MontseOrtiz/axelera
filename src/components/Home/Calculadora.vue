<template>
  <section class="background">
    <div class="container first">
      <div class="header-position">
        <h4 class="header">Tu respuesta en menos de 24 horas.</h4>
      </div>
      <div class="background-white">
        <div class="container second">
          <div class="card monto-credit">
            <h5>Monto de tu crédito</h5>
            <p>$ 3,000 - $ 150,000</p>
            <b-form-input
              id="monto-range"
              v-model="valueMonto"
              type="range"
              min="3000"
              max="150000"
              step="1000"
            ></b-form-input>
            <span class="span-value">$ {{valueMonto}}</span>
          </div>

          <div class="card plazo-credit">
            <h5>Plazo de tu crédito</h5>
            <p>3 meses - 24 meses</p>
            <b-form-input
              id="plazo-range"
              v-model="valuePlazo"
              type="range"
              min="3"
              max="24"
              step="1"
            ></b-form-input>
            <span class="span-value">{{valuePlazo}} meses</span>
          </div>

          <div class="card card-pagos">
            <h5>Tus pagos mensuales aproximados</h5>
            <div class="span-value span-pagos">
              <span class="pagos">$ {{pagos}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Calculadora",
  data() {
    return {
      valueMonto: "3000",
      valuePlazo: "3"
    };
  },
  computed: {
    pagos: function calculoPagos() {
      const tasaAnual = 0.39;
      const tasaMensual = tasaAnual / 12;
      let monto = this.valueMonto;
      let plazo = this.valuePlazo;
      let tasaPlazo = Math.pow(1 + tasaMensual, plazo);
      let calculo = Number(
        (tasaMensual * tasaPlazo * (monto / (tasaPlazo - 1))).toFixed(2)
      );
      let pagos = calculo.toLocaleString();
      return pagos;
    }
  }
};
</script>

<style scoped>
.background {
  background-color: rgb(156, 133, 150, 0.72);
  height: 33rem;
  width: 28rem;
  border-radius: 5px;
}
.background-white {
  background-color: white;
  height: auto;
}
.card {
  padding: 6% 2%;
  border: 0;
}
.card-pagos {
  border-color: black;
}
.first {
  padding-right: 20px;
  padding-left: 20px;
}
.header {
  color: white;
  text-align: center;
}
.header-position {
  padding-top: 12px;
  padding-bottom: 10px;
}
h5 {
  text-align: center;
  color: #745b6f;
  font-weight: bold;
}
p {
  text-align: center;
}
.pagos {
  font-size: 1.5rem;
}
.span-value {
  text-align: center !important;
  font-weight: bolder;
}
.span-pagos {
  margin-top: 3%;
}
.second {
  padding-right: 43px;
  padding-left: 43px;
}
section {
  display: flex;
  align-content: center;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  background-color: #745b6f !important;
  margin-bottom: 5%;
  outline: none;
  border-radius: 15px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #988095;
  cursor: pointer;
  border-radius: 15px;
}

@media only screen and (max-device-width: 320px) {
  .background {
    height: 33rem;
    width: 28rem;
    border-radius: 5px;
  }
  .background-white {
    background-color: white;
    height: auto;
  }
  .first {
    margin: 0;
    padding-right: 10px;
    padding-left: 10px;
  }
  .second {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media only screen and (max-device-width: 359px) {
  .background {
    background-color: rgb(156, 133, 150, 0.72);
    height: auto;
    width: 18rem;

    border-radius: 5px;
    padding-bottom: 15px;
  }
  .background-white {
    background-color: white;
    height: auto;
  }
  .second {
    padding-right: 20px;
    padding-left: 20px;
  }
}
@media only screen and (min-device-width: 360px) and (max-device-width: 410px) {
  .background {
    background-color: rgb(156, 133, 150, 0.72);
    height: auto;
    width: 20rem;
    border-radius: 5px;
    padding-bottom: 20px;
  }
  .background-white {
    background-color: white;
    height: auto;
  }
  .second {
    padding-right: 20px;
    padding-left: 20px;
  }
}
@media only screen and (min-device-width: 411px) and (max-device-width: 456px) {
  .background {
    background-color: rgb(156, 133, 150, 0.72);
    height: auto;
    width: 20rem;
    margin-top: 20%;
    border-radius: 5px;
    padding-bottom: 20px;
  }
  .background-white {
    background-color: white;
    height: auto;
  }
  .second {
    padding-right: 30px;
    padding-left: 30px;
  }
}
@media only screen and (min-device-width: 457px) and (max-device-width: 991px) {
  .background {
    background-color: rgb(156, 133, 150, 0.72);
    height: auto;
    width: 20rem;
    border-radius: 5px;
    padding-bottom: 20px;
  }
  .background-white {
    background-color: white;
    height: auto;
  }
  .second {
    padding-right: 30px;
    padding-left: 30px;
  }
}
</style>



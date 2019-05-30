<template>
  <div>
    <Navbar/>
    <div class="perfil-info">
      <h3>Información de usuario</h3>
      <div class="container">
        <div class="row perfil-info-1">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 datos">
            <p>Nombre</p>
            <p>Apellidos</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 datos">
            <p>E-mail:</p>
            <p>Banco:</p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 datos">
            <p>Telefono:</p>
            <p>Num. de cuenta: ******* 456</p>
          </div>
        </div>
      </div>
      <h3 class="info-prest">Información del préstamo</h3>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 prestamo">
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <h5>Fecha de inicio</h5>
                  <p>dia/mes/año</p>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <h5>Fecha de término</h5>
                  <p>dia/mes/año</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <h5>Monto Solicitado</h5>
                  <p>$0.00</p>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <h5>Mensualidad</h5>
                  <p>$0.00</p>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-12 col-lg-12 num-pago">
                  <h5>Número de pagos</h5>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 num-pago">
                  <h5>Totales</h5>
                  <p>0</p>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 num-pago">
                  <h5>Realizados</h5>
                  <p>0</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <b-dropdown
                    size="sm"
                    id="dropdown-divider"
                    text="Fechas y pagos previos"
                    class="btn"
                  >
                    <b-dropdown-text>31/04/2019 $0.00</b-dropdown-text>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-text>31/04/2019 $0.00</b-dropdown-text>
                  </b-dropdown>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <b-dropdown
                    size="sm"
                    id="dropdown-divider"
                    text="Fechas y pagos futuros"
                    class="btn"
                  >
                    <b-dropdown-text>31/04/2019 $0.00</b-dropdown-text>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-text>31/04/2019 $0.00</b-dropdown-text>
                  </b-dropdown>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="cont-color" :style="myStyle">
                <div class="cont">
                  <div class="fecha">
                    <h5>Número de pago:</h5>
                    <p>0</p>
                  </div>
                  <div class="fecha">
                    <h5>Próxima fecha:</h5>
                    <p>31/04/2019</p>
                  </div>
                  <div class="fecha">
                    <h5>Próximo pago:</h5>
                    <p>$0.00</p>
                  </div>
                  <hr>
                  <div class="fecha">
                    <h5>Adeudo a la fecha:</h5>
                    <p>$0.00</p>
                  </div>
                  <div class="solicita">
                    <b-alert
                      :show="dismissCountDown"
                      dismissible
                      variant="success"
                      @dismissed="dismissCountDown=0"
                      @dismiss-count-down="countDownChanged"
                    >Enviado</b-alert>
                    <b-button @click="showAlert" class="m-1">Solicitar Estado de Cuenta</b-button>
                  </div>
                </div>
              </div>
              <br>
              <div class="solicita">
                <b-button class="m-1 solicita" variant="success">
                  <router-link to="/">Solicitar nuevo préstamo</router-link>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>¿Tienes alguna duda?</h3>
        <div class="button">
          <button class="contactanos">
            <router-link to="/contacto">¡Contáctanos!</router-link>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";

export default {
  name: "Perfil",
  data() {
    return {
      myStyle: {
        backgroundColor: "rgb(156, 133, 150, .72)"
      },

      value: "2",
      dismissSecs: 1,
      dismissCountDown: 0
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  },
  components: {
    Navbar
  }
};
</script>

<style scoped>
.contactanos {
  font-size: 1.5rem;
  text-align: center;
  /* width: 15vw; */
  /* margin-top: 1rem; */
  margin-bottom: 1.5rem;
  padding: 12px 50px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(156, 133, 150);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
button a {
  color: snow !important;
  text-decoration: none;
  background-color: transparent !important;
}
.button {
  display: flex;
  justify-content: center;
}
.btn {
  padding-left: 0;
  padding-right: 0;
}
.cont {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
}
.cont-color {
  padding: 2%;
  border-radius: 15px;
  width: auto;
}
.datos {
  padding: 0%;
}
.fecha {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
}
hr {
  border-top: 3px solid rgba(0, 0, 0, 0.1);
}
h3 {
  text-align: center;
  margin-bottom: 2%;
  margin-top: 3%;
}

.info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.info-prest {
  text-align: center;
  margin-bottom: 2.5%;
  margin-top: 2.5%;
}
.liquidar {
  text-align: center;
}
.num-pago {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
.perfil-info {
  margin-top: 90px;
}
.perfil-info-1 {
  margin-top: 1rem;
  background-color: rgb(156, 133, 150);
  border-radius: 5px;
  padding: 2%;
  color: snow;
  width: auto;
  height: auto;
}
.prestamo {
  padding-top: 3%;
}
select {
  color: snow;
  padding: 0.25rem 0.5rem;
  background-color: #6c757d;
  border-color: #6c757d;
  cursor: pointer;
  height: 31px;
  /* width: 58px; */
  font-size: 0.875rem;
}
.solicita {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
@media only screen and (min-device-width: 668px) and (max-device-width: 991px) {
  #dropdown-divider__bv_toggle_ {
    font-size: 5px !important;
    width: 10%;
  }
}
</style>

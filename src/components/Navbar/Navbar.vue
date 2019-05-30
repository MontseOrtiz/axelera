<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light fixed-top"
    v-bind:class="{ 'navbarOpen': show }"
  >
    <router-link to="/">
      <img src="../../assets/axelera_logo.svg" class="logo">
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      v-on:click="toggleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNav"
      v-bind:class="{ 'show': show }"
    >
      <ul class="navbar-nav nav-list">
        <li class="nav-item">
          <router-link class="dropdown-item color-text" to="/">INICIO</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            v-on:click="toggleNavbar"
          >PRODUCTOS</a>
          <div
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
            v-bind:class="{ 'show': show }"
          >
            <router-link class="dropdown-item color-text" to="/axelera-personal">AXELERA PERSONAL</router-link>
            <router-link class="dropdown-item color-text" to="/axelera-adelanto">AXELERA ADELANTO</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link
            class="dropdown-item color-text"
            to="/preguntas-frecuentes"
          >PREGUNTAS FRECUENTES</router-link>
        </li>
        <li class="nav-item">
          <router-link class="dropdown-item color-text" to="/contacto">CONTACTO</router-link>
        </li>
        <li class="nav-item">
          <router-link class="dropdown-item color-text" to="/iniciar-sesion">INICIA SESIÓN</router-link>
        </li>
        <li>
          <button type="button" class="btn">
            <router-link class="dropdown-item btn" to="/registro">SOLICITA TU CRÉDITO</router-link>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  width: 100% !important;
}
.nav-item {
  margin-top: auto;
  margin-bottom: auto;
}
.nav-link {
  padding: 0;
}
.nav-list {
  margin-right: 2%;
}
.logo {
  width: 80px;
  padding-top: 7px;
  margin-left: 5%;
}
.color-text {
  color: #6d6d6d;
  font-size: 15px;
}
.btn {
  background-color: #32cd32 !important;
  color: white !important;
}
a {
  color: transparent;
  text-decoration: none;
  background-color: transparent !important;
}
</style>

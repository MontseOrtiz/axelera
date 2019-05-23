<template>
  <div>
    <Navbar/>
    <AdelantoImagen/>
    <AdelantoCards/>
    <Banner/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import AdelantoImagen from "./AdelantoImagen.vue";
import AdelantoCards from "./AdelantoCards.vue";
import Banner from "../Banner/Banner.vue";
import Footer from "../Footer/Footer.vue";
export default {
  name: "Adelanto",
  components: {
    Navbar,
    AdelantoImagen,
    AdelantoCards,
    Banner,
    Footer
  }
};
</script>



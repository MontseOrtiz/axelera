import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home/Home.vue";
import Personal from "../components/Personal/Personal.vue";
import Adelanto from "../components/Adelanto/Adelanto.vue";
import Preguntas from "../components/Preguntas/Preguntas.vue";
import Contacto from "../components/Contacto/Contacto.vue";
import Iniciar from "../components/Iniciar_Sesion/Iniciar.vue";
import Registro from "../components/Registro/Registro.vue";
import Mail from "../components/Contrasena/Mail.vue";
import Restablecer from "../components/Contrasena/Restablecer.vue";
import Formulario1 from "../components/Solicitud/Formulario1.vue";
import Formulario2 from "../components/Solicitud/Formulario2.vue";
import Formulario3 from "../components/Solicitud/Formulario3.vue";
import Formulario4 from "../components/Solicitud/Formulario4.vue";
import Formulario5 from "../components/Solicitud/Formulario5.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Home
    },
    {
      path: "/axelera-personal",
      name: "personal",
      component: Personal
    },
    {
      path: "/axelera-adelanto",
      name: "adelanto",
      component: Adelanto
    },
    {
      path: "/preguntas-frecuentes",
      name: "preguntas",
      component: Preguntas
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto
    },
    {
      path: "/iniciar-sesion",
      name: "iniciar sesion",
      component: Iniciar
    },
    {
      path: "/registro",
      name: "registro",
      component: Registro
    },
    {
      path: "/mail",
      name: "mail",
      component: Mail
    },
    {
      path: "/restablecer",
      name: "restablecer",
      component: Restablecer
    },
    {
      path: "/solicita-tu-credito",
      name: "Formulario1",
      component: Formulario1
    },
    {
      path: "/solicita-tu-credito-2",
      name: "Formulario2",
      component: Formulario2
    },
    {
      path: "/solicita-tu-credito-3",
      name: "Formulario3",
      component: Formulario3
    },
    {
      path: "/solicita-tu-credito-4",
      name: "Formulario4",
      component: Formulario4
    },
    {
      path: "/solicita-tu-credito-5",
      name: "Formulario5",
      component: Formulario5
    }
  ]
});

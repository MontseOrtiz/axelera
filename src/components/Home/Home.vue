<template>
	<div>
		<Navbar/>
    <BackgroundCalculator/>
    <ComoFuncionamos/>
    <Requisitos/>
    <Nosotros/>
    <Footer/> 
	</div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import BackgroundCalculator from './BackgroundCalculator.vue';
import ComoFuncionamos from './ComoFuncionamos.vue';
import Requisitos from './Requisitos.vue';
import Nosotros from './Nosotros.vue';
import Footer from '../Footer/Footer.vue';

export default {
	name: 'Home',
	components: {
		Navbar,
    BackgroundCalculator,
    ComoFuncionamos,
    Requisitos,
    Nosotros,
    Footer
	}
}
</script>



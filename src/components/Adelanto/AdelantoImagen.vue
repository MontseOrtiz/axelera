<template>
	<section class="container-fluid">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<div class="container">
					<h3 class="h3">AXELERA</h3>
					<h3>ADELANTO</h3>
					<hr>
					<p>Es una excelente solución para conseguir liquidez inmediata sin endeudarse y podrás solicitar hasta 1 mes de tu sueldo por adelantado. Sin trámites complicados ni comisiones. Puedes solicitar un anticipo cuantas veces lo necesites siempre y cuando hayas cubierto tu saldo anterior.</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 no-padding">
				<div class="image">
					<img src="../../assets/adelant.jpg">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'AdelantoImagen'
}
</script>

<style scoped>
	.container {
		padding-left: 8%;
		padding-right: 8%;
	}
	.image {
		display: grid;
		height: 100%;
	}
	img {
		/* width: 840px;
		height: 720px; */
		max-width: 100%;
		/* height: 100%; */
		margin: auto;
		/* margin-bottom: 0; */
	}
	.no-padding {
		padding: 0;
	}
	.h3 {
		margin-top: 35%;
		margin-bottom: 0;
	}
	h3 {
		color: #745B6F;
	}
	hr {
		margin-top: 7%;
		margin-bottom: 12%;
		height: 1px;
		color: #3C3850;
		background-color: #3C3850;
		border: none;
	}
	p {
		color: #3C3850;
		font-size: 1rem;
	}
	@media only screen and (device-width:768px) {
		.row {
			margin-top: 5%;
		}
	}
</style>



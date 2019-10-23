<template>
	<section class="welcome">
		<div class="welcome__background"></div>
		<div class="container welcome__wrapper">
			<div class="row welcome__wrapper-inner">
				<div class="col-12 col-sm-10 col-md-7 col-lg-6 mr-auto welcome__left">
					<div>
						<h1 class="welcome__title">Your Movie &amp; TV Show Library</h1>
						<p class="welcome__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<nuxt-link to="/home" class="btn btn-secondary">Discover now<i class="material-icons top__icon margin-l-5">keyboard_arrow_right</i></nuxt-link>
					</div>
				</div>
				<div class="col-12 col-lg-5 welcome__right">
					<img src="~assets/images/mobile-index.png" alt="mobile app picture" class="welcome__img">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	layout: "welcomelayout"
}
</script>
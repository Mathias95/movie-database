<template>
	<section class="banner">
		<div class="banner__container">
			<div class="banner__text-col costum-container">
				<div class="banner__text-wrapper">
				<h1 class="banner__title">Discover New Movies &amp; TV Shows</h1>
				<p class="banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
			</div>
		</div>
		<ScrollSection/>
	</section>	
</template>

<script>
import ScrollSection from "~/components/ScrollSection.vue";

export default {
	components: {
		ScrollSection
	}
}
</script>
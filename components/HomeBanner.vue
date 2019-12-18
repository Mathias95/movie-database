<template>
	<section class="banner">
		<div class="banner__inner">
			<div class="banner__text-wrapper costum-container">
				<div class="row">
					<div class="banner__text-intro">
					<span class="banner__intro-title">New movie releases</span>
					<h1 class="banner__title heading-1">Discover New Movies &amp; TV Shows</h1>
					<p class="banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					</div>
					<div class="banner__media col">
						<h5 class="banner__media-title heading-5">Media</h5>
					</div>
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
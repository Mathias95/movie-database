<template>
	<div class="movie-detail">
		<MovieBanner/>

		<section class="movie-content">
			<div class="movie-content__container costum-container">
				<div class="row">
					<div class="movie-content__left col-12 col-lg-6">
						<h3 class="movie-content__title heading-4">The synopsis</h3>
						<p class="movie-content__text text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>

					<div class="movie-content__right col-12 col-lg-6">
						<div class="movie-content__credit">
							<h3 class="movie-content__credit-title heading-4">Full cast &amp; crew</h3>
							<span class="movie-content__credit-order">(In credits order)</span>
						</div>
						here goes casting actor slider component
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import MovieBanner from "~/components/MovieBanner.vue";

export default {
	components: {
		MovieBanner
	}
}
</script>
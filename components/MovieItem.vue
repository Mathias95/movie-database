<template>
	<div class="col-6 col-md-4 col-lg-3 xl-4 movie-card">
		<li class="movie-item">
			<nuxt-link to="" class="movie-item__link">
				<figure class="movie-item__img-wrapper">
					<img src="~assets/images/movie-poster.jpg" alt="movie poster" class="movie-item__img">
					<!-- <img src="" alt="movie poster" class="movie-item__img load"> -->
					<span class="movie-item__rating">8.3</span>
				</figure>
			</nuxt-link>
			<div class="movie-item__info">
				<p class="movie-item__genre">Action, Adventure</p>
				<h3 class="movie-item__title">Wonder Woman</h3>
			</div>
		</li>
	</div>
</template>

<script>
export default {

}
</script>
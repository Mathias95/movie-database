<template>
	<li class="movie-item">
		<nuxt-link to="/moviepage" class="movie-item__link">
			<figure class="movie-item__img-wrapper">
				<img src="~assets/images/wonderwomanposterimg.jpg" alt="movie poster" class="movie-item__img">
				<!-- <img src="" alt="movie poster" class="movie-item__img load"> -->
				<span class="movie-item__rating">8.3</span>
			</figure>
		</nuxt-link>
		<div class="movie-item__info">
			<p class="movie-item__genre">Action, Adventure</p>
			<h3 class="movie-item__title">Wonder Woman</h3>
		</div>
	</li>
</template>

<script>
export default {

}
</script>
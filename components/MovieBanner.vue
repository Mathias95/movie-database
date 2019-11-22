<template>
	<section class="movie-detail__banner">
		<div class="movie-detail__banner-container costum-container">
			<div class="movie-detail__title-wrapper">
				<h1 class="movie-detail__title heading-1">Wonder woman</h1>
				<p class="movie-detail__release">(<span>2017</span>)</p>
			</div>

			<div class="movie-detail__wrapper">
				<ul class="movie-genre">
					<li class="movie-genre__tag">Adventure</li>
					<li class="movie-genre__tag">Action</li>
					<li class="movie-genre__tag">Fantasy</li>
				</ul>

				<ul class="movie-info">
					<span class="movie-info__seperator movie-info__seperator--left">&bull;</span>
					<li class="movie-info__playtime">Movie time:<span>141m</span></li>
					<span class="movie-info__seperator movie-info__seperator--right">&bull;</span>
					<li class="movie-info__release">Release date:<span class="movie-info__release-year">(</span>2017<span>)</span></li>
				</ul>
			</div>

			<p class="movie-synopsis text-normal">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>

			<div class="movie-rating">
				<span class="movie-rating__text">IMDb Score:</span>
				<div class="movie-rating__wrapper"><i class="movie-rating__icon material-icons">star</i><span class="movie-rating__score ">8.2</span></div>
			</div>

			<div class="movie-social">
				<button class="movie-social__watch btn btn-secondary"><i class="movie-social__watch-icon material-icons margin-r-5">play_arrow</i>Watch trailer</button>
				<nuxt-link to="/" class="movie-social__link movie-social__link--desktop btn btn-tertiary">IMDb</nuxt-link>
				<button class="movie-social__favourite"><i class="movie-social__favourite-icon material-icons">favorite_border</i></button>
			</div>
		</div>
	</section>	
</template>

<script>
export default {

}
</script>
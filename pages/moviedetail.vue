<template>
	<div class="movie-detail">
		<section class="movie-detail__banner">
			<div class="movie-detail__banner-container">
				<div class="movie-detail__banner-wrapper">
					<h1 class="movie-detail__title">Wonder woman</h1>
					<p class="movie-detail__release"><span>(</span>2017<span>)</span></p>
				</div>

				<ul class="movie-genre">
					<li class="movie-genre__tag">Adventure</li>
					<li class="movie-genre__tag">Action</li>
					<li class="movie-genre__tag">Fantasy</li>
				</ul>

				<ul class="movie-info">
					<li class="movie-info__playtime">Movie time:<span>141m</span></li>
					<span>&bull;</span>
					<li class="movie-info__release">Release date:<span>(</span>2017<span>)</span></li>
				</ul>

				<p class="movie-synopsis">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>

				<div class="movie-ratig movie-rating--desktop">
					<span class="movie-rating__text">IMDb Score:</span>
					<div class="movie-rating__wrapper"><i class="movie-rating__icon material-icons">star</i><span class="movie-rating__score ">8.2</span></div>
				</div>

				<div class="movie-social">
					<button class="movie-social__watch btn btn-secondary"><i class="movie-social__watch-icon material-icons">play_arrow</i>Watch trailer</button>
					<nuxt-link to="/" class="movie-social__link movie-social__link--desktop">IMDb</nuxt-link>
					<button class="movie-social__favourite"><i class="movie-social__favourite-icon material-icons">favorite_border</i></button>
				</div>
			</div>
		</section>

		<section class="movie-content">
			<div class="movie-content__container">
				<div class="movie-content__left">
					<h2 class="movie-content__title">The synopsis</h2>
					<p class="movie-content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				</div>

				<div class="movie-content__right">
					<div class="movie-content__credit">
						<h3 class="movie-content__credit-title">Full cast &amp; crew</h3>
						<span class="movie-content__credit-order">(In credits order)</span>
					</div>

					here goes caster slider component
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {

}
</script>
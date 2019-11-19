<template>
	<main class="movies-wrapper">
		<div class="movies costum-container">
			<div class="row">
				<header class="movies__headline col">
					<h2 class="movies__title heading-2">Trending movies</h2>
					<div class="movies__underline-wrapper">
						<div class="movies__underline"></div>
					</div>
				</header>
			</div>
			<ul class="movies__list row">
				<MovieItem/>
			</ul>
			<div class="row">
				<div class="movies__more col">
					<button class="movies__load btn btn-primary">Load more<i class="material-icons top__icon margin-l-5">keyboard_arrow_right</i></button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import MovieItem from "~/components/MovieItem.vue";
export default {
	components: {
		MovieItem
	}
}
</script>
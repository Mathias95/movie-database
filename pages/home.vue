<template>
	<section id="#homePage">
		<HomeBanner/>
		<MovieList/>
	</section>
</template>

<script>
import HomeBanner from "~/components/HomeBanner.vue";
import MovieList from "~/components/MovieList.vue";

export default {
	components: {
		HomeBanner,
		MovieList
	}
}
</script>
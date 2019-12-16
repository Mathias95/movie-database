<template>
	<div class="flex-grow">
		<HomeBanner/>
		<MovieList/>
	</div>
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
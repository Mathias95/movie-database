<template>
  <div id="app">
		<navigation/>
		<main class="main">
			<TopHeader/>
			<nuxt />
		</main>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import TopHeader from "~/components/TopHeader.vue";

export default {
	components: {
		Navigation,
		TopHeader
	}
}
</script>
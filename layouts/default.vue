<template>
  <div class="app-wrapper" id="app">
		<navigation/>
		<section class="main">
			<TopHeader/>
			<nuxt />
		</section>
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
<template>
  <div id="app">
		<navigation/>
		<section class="main">
			<nuxt />
		</section>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";

export default {
	components: {
		Navigation
	}
}
</script>
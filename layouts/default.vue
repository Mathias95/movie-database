<template>
  <div id="app">
		<navigation/>
		<section class="wrapper">
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
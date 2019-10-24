<template>
  <div id="app">
		<div class="app-wrapper">
			<main class="main">
				<navigation/>
				<nuxt />
			</main>
		</div>
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
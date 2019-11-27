<template>
  <div id="app">
		<Sidebar/>
		<main class="main">
			<TopHeader/>
			<nuxt />
		</main>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import TopHeader from "~/components/TopHeader.vue";

export default {
	components: {
		Sidebar,
		TopHeader
	}
}
</script>
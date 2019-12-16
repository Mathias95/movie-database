<template>
  <div id="app">
		<div class="app-container">
			<div class="app-wrapper">
				<TopHeader/>
				<div class="main-wrapper">
					<Sidebar/>
					<main class="main-content">
						<simplebar data-simplebar-auto-hide="false" class="main-scroll">
							<nuxt />
						</simplebar>
					</main>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import TopHeader from "~/components/TopHeader.vue";
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
	components: {
		Sidebar,
		TopHeader,
		simplebar
	}
}
</script>
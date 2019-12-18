<template>
		<div class="#welcome">
			<header class="top-header">
				<div class="costum-container costum-container--full">
					<div class="row">
						<div class="col">
							<Logo/>
						</div>
					</div>
				</div>
			</header>
			<nuxt/>
		</div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
	components: {
		Logo
	}
}
</script>
<template>
		<div>
			<header class="top-header">
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<logo/>
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
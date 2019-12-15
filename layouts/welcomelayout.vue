<template>
		<div class="#welcome">
			<header class="top-header">
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<LogoText/>
						</div>
					</div>
				</div>
			</header>
			<nuxt/>
		</div>
</template>

<script>
import LogoText from "~/components/LogoText.vue";

export default {
	components: {
		LogoText
	}
}
</script>
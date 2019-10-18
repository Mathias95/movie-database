<template>
	<header class="header">
		<div class="header__mobile-wrapper">
			<button class="header__mobile">
				<span class="header__mobile-line header__mobile-line--1"></span>
				<span class="header__mobile-line header__mobile-line--2"></span>
				<span class="header__mobile-line header__mobile-line--3"></span>
			</button>
			<logo class="header__logo"/>
			<div class="header__search">
				<Search/>
			</div>
		</div>
	</header>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Search from "~/components/Search.vue";

export default {
	components: {
		Logo,
		Search
	}
}
</script>
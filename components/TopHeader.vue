<template>
	<header class="header">
		<div class="header__mobile-wrapper costum-container">
			<button @click="toggle" class="header__mobile" v-bind:class="{ 'is-active': slideMenu }">
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
	data(){
		return {
			slideMenu: false
		}
	},
	methods: {
		toggle() {
			this.slideMenu = !this.slideMenu;
		}
	},
	components: {
		Logo,
		Search
	}
}
</script>
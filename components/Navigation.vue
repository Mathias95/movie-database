<template>
	<div>
		<header class="header">
			<div class="header__mobile-wrapper">
				<button @click="toggle" class="header__mobile" v-bind:class="{ 'is-active': offCanvas }">
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
		
		<aside class="sidebar trans-sidebar" v-bind:class="{'on': offCanvas}">
			<nav class="sidebar__menu">
				<ul class="sidebar__list">
					<li class="sidebar__item"><nuxt-link to="/" class="sidebar__link">Trending movies</nuxt-link></li>
				</ul>
			</nav>
		</aside>
		<div @click="toggle" class="sidebar__overlay" v-bind:class="{'on': offCanvas }"></div>
	</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Search from "~/components/Search.vue";

export default {
	data(){
		return {
			offCanvas: false
		}
	},
	methods: {
		toggle() {
			this.offCanvas = !this.offCanvas;
		}
	},
	components: {
		Logo,
		Search
	}
}
</script>
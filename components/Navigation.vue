<template>
	<div>
		<header class="header">
			<div class="header__mobile-wrapper">
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

		<aside class="sidebar trans-sidebar" v-bind:class="{'on': slideMenu}">
			<nav class="sidebar__menu">
				<div class="sidebar__wrapper">
					<DropdownProfile/>
					<ul class="sidebar__list">
						<li class="sidebar__item" v-for="item in items" :key="item.title">
							<nuxt-link :to="item.to" class="sidebar__link trans-fast"> 
								<i class="material-icons sidebar__item-icon">{{ item.icon }}</i>
								{{ item.title }}
							</nuxt-link>
						</li>
					</ul>
					<hr class="sidebar__bottom-line">
				</div>
			</nav>
		</aside>
		<div @click="toggle" class="sidebar__overlay" v-bind:class="{'on': slideMenu }"></div>
	</div>
</template>

<script>
import DropdownProfile from "~/components/DropdownProfile.vue";
import Logo from "~/components/Logo.vue";
import Search from "~/components/Search.vue";

export default {
	data(){
		return {
			slideMenu: false,
			items: [
				{
					icon: 'star',
					title: 'Trending Movies',
					to: '/home'
				},
				{
					icon: 'assessment',
					title: 'Top Rated',
					to: '/'
				},
				{
					icon: 'event',
					title: 'Upcoming',
					to: '/'
				},
				{
					icon: 'favorite_border',
					title: 'Favorite Movies',
					to: '/'
				}
			]
		};
	},
	methods: {
		toggle() {
			this.slideMenu = !this.slideMenu;
		}
	},
	components: {
		DropdownProfile,
		Search,
		Logo
	}
}
</script>
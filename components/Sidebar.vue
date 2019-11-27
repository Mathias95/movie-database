<template>
	<div class="sidebar-container">
		<aside class="sidebar trans-sidebar">
			<nav class="sidebar__menu">
				<div class="sidebar__menu-wrapper">
					<div class="sidebar__menu--scroll">
						<div class="sidebar__menu--scrollable">
							<div class="sidebar__menu-inner">
								<DropdownProfile>
									<template #trigger="{hasFocus, isOpen}">
										<span class="dropdown__profile-img--wrapper trans-fast" :class="[(hasFocus || isOpen) ? 'focus-on' : 'focus-off' ]">
											<img class="dropdown__profile-img" src="~assets/images/profile-img.jpg" alt="profile image">
										</span>
									</template>
									<template #dropdown>
										<ul class="dropdown__content-list">
											<li class="dropdown__content-item"><nuxt-link to="/" ref="account" class="dropdown__content-link trans-fast"><i class="material-icons dropdown__content-icon">person_outline</i>Account</nuxt-link></li>
											<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link trans-fast"><i class="material-icons dropdown__content-icon">help_outline</i>Help</nuxt-link></li>
											<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link trans-fast"><i class="material-icons dropdown__content-icon">input</i>Sign out</nuxt-link></li>
										</ul>
									</template>
								</DropdownProfile>
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
						</div>
					</div>
				</div>
			</nav>
		</aside>
		<button @click="toggleSlide" class="sidebar__overlay" v-bind:class="{'on': slideMenu }"></button>
	</div>
</template>

<script>
import DropdownProfile from "~/components/DropdownProfile.vue";
import Logo from "~/components/Logo.vue";
import Search from "~/components/Search.vue";

export default {
	data(){
		return {
			isOpen: false,
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
			this.isOpen = !this.isOpen
		},
		toggleSlide() {
			this.slideMenu = !this.slideMenu
		}
	},
	components: {
		DropdownProfile,
		Search,
		Logo
	}
}
</script>
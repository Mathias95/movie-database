<template>
	<header class="header">
		<div class="header__mobile-wrapper costum-container costum-container--full">
			<div class="header__search">
				<Search/>
			</div>

			<DropdownProfile class="dropdown--desktop">
				<template #trigger="{hasFocus, isOpen}">
					<span class="dropdown__profile-img--wrapper trans-fast" :class="[(hasFocus || isOpen) ? 'focus-on' : 'focus-off' ]">
						<img class="dropdown__profile-img" src="~assets/images/profile-img.jpg" alt="profile image">
					</span>
				</template>
				<template #dropdown>
					<ul class="dropdown__content-list">
						<li class="dropdown__content-item"><nuxt-link to="/" ref="account" class="dropdown__content-link trans-fast">Account Manage</nuxt-link></li>
						<li class="dropdown__content-item"><nuxt-link to="/" ref="account" class="dropdown__content-link trans-fast">Watch Playlist</nuxt-link></li>
						<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link trans-fast">Settings</nuxt-link></li>
						<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link trans-fast">Help</nuxt-link></li>
						<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link trans-fast">Sign Out</nuxt-link></li>
					</ul>
				</template>
			</DropdownProfile>

			<button @click="toggleSlide" class="header__mobile" v-bind:class="{ 'is-active': slideMenu }">
				<span class="header__mobile-line header__mobile-line--1"></span>
				<span class="header__mobile-line header__mobile-line--2"></span>
				<span class="header__mobile-line header__mobile-line--3"></span>
			</button>
		</div>
	</header>
</template>

<script>
import DropdownProfile from "~/components/DropdownProfile.vue";
import Logo from "~/components/Logo.vue";
import Search from "~/components/Search.vue";

export default {
	data(){
		return {
			slideMenu: false
		}
	},
	methods: {
		toggleSlide() {
			this.slideMenu = !this.slideMenu;
		}
	},
	components: {
		DropdownProfile,
		Logo,
		Search
	}
}
</script>
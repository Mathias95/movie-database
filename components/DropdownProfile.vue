<template>
	<div class="dropdown">
		<button class="dropdown__button" type="button">
			<div class="dropdown__profile-container">
				<span class="dropdown__profile">
					<img class="dropdown__profile-img" src="" alt="">
				</span>
				<div class="dropdown__profile-wrapper">
					<span class="dropdown__profile-tag">Hi,</span>
					<p class="dropdown__profile-name">Mathias</p>
				</div>
			</div>
		</button>
		
		<div>
			<!-- <button class="dropdown__overlay"></button> -->
			<div class="dropdown__content">
				<ul class="dropdown__content-list">
					<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link"></nuxt-link></li>
					<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link"></nuxt-link></li>
					<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link"></nuxt-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>
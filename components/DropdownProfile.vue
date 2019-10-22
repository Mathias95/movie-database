<template>
	<div>
		<div class="dropdown">
			<div class="dropdown__profile-container">
				<button class="dropdown__button">
					<span class="dropdown__profile">
						<img class="dropdown__profile-img" src="~assets/images/profile-img.jpg" alt="profile image">
					</span>
				</button>
				<div class="dropdown__profile-wrapper">
					<span class="dropdown__profile-tag">Hi,</span>
					<p class="dropdown__profile-name">Mathias</p>
				</div>
			</div>
			
			<div>
				<!-- <button class="dropdown__overlay"></button> -->
				<div class="dropdown__content">
					<ul class="dropdown__content-list">
						<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link"><i class="material-icons dropdown__content-icon">person_outline</i>Account</nuxt-link></li>
						<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link"><i class="material-icons dropdown__content-icon">help_outline</i>Help</nuxt-link></li>
						<li class="dropdown__content-item"><nuxt-link to="/" class="dropdown__content-link"><i class="material-icons dropdown__content-icon">input</i>Sign out</nuxt-link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>
<template>
	<div>
		<div class="dropdown">
			<div class="dropdown__profile-container">
				<button @click="toggle" @keydown.space.exact.prevent="toggle" @focus="buttonHasFocus = true" @blur="buttonHasFocus = false" type="button" class="dropdown__button">
						<slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot>
				</button>
				<div class="dropdown__profile-wrapper">
					<span class="dropdown__profile-tag">Hi,</span>
					<p class="dropdown__profile-name">Mathias</p>
				</div>
			</div>
			
			<button v-if="isOpen" @click="isOpen = false" type="button" class="dropdown__overlay"></button>
			<div v-if="isOpen">
				<slot name="dropdown"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonHasFocus: false,
			isOpen: false
		}
	},
	mounted () {
		const onEscape = (e) => {
			if (!this.isOpen || e.key !== 'Escape') {
				return
			}
			this.isOpen = false
		}
		document.addEventListener('keydown', onEscape)
		this.$on('hook:destroyed', () => {
			document.removeEventListener('keydown', onEscape)
		})
	},
	methods: {
		toggle () {
			this.isOpen = !this.isOpen
		}
	}
}
</script>
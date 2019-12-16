<template>
	<div class="dropdown-outer">
		<div class="dropdown">
			<div class="dropdown__profile-container">
				<button 
				@click="toggle" 
				@keydown.space.exact.prevent="toggle" 
				@keydown.up.exact.prevent="startArrowKeys"
				@keydown.down.exact.prevent="startArrowKeys"
				@focus="buttonHasFocus = true" 
				@blur="buttonHasFocus = false" 
				type="button" 
				class="dropdown__button">
					<slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot>
					<div class="dropdown__profile-wrapper ellipsis">
						<span class="dropdown__profile-tag">Hi,</span>
						<p class="dropdown__profile-name ellipsis">Mathias</p>
					</div>
					<i class="material-icons dropdown__profile-icon">expand_more</i>
				</button>
			</div>
			
			<button v-if="isOpen" @click="isOpen = false" type="button" class="dropdown__overlay">&nbsp;</button>
			<transition 
				enter-active-class="trans-all anim-fastest ease-out-quad"
        leave-active-class="trans-all anim-faster ease-in-quad"
        enter-class="opacity-0 scale-70"
        enter-to-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-70">
			<div v-if="isOpen" ref="dropdown" class="dropdown__content">
				<slot name="dropdown"></slot>
			</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonHasFocus: false,
			isOpen: false,
			focusIndex: 0
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
		toggle() {
			this.isOpen = !this.isOpen
		},
		// startArrowKeys() {
		// 	if (this.isOpen) {
		// 		this.$refs.account.focus()
		// 	}
		// },
		// focusPrevious() {
		// 	this.focusIndex = this.focusIndex - 1
		// },
		// focusNext() {
		// 	this.focusIndex = this.focusIndex + 1
		// }
	}
}
</script>
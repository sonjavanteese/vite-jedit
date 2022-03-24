
<script>
	import { slide } from "svelte/transition";
</script>

<span transition:slide>
	<slot />
</span>

<style>
	span {
		@apply my-16;
	}
</style>


<div class="Aligner">
	<div class="Aligner-item Aligner-item--top">
		<slot name="top"><!-- optional fallback --></slot>
	</div>
	<div class="Aligner-item">
		<slot />
	</div>
	<div class="Aligner-item Aligner-item--bottom">
		<slot name="bottom"><!-- optional fallback --></slot>
	</div>
</div>

<style>
	.Aligner {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Aligner-item {
		max-width: 90%;
	}

	.Aligner-item--top {
		align-self: flex-start;
	}

	.Aligner-item--bottom {
		align-self: flex-end;
	}
</style>

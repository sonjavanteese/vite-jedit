<script>
	import FormEl from './FormEl.svelte';
	import Button from './Button.svelte';
	import FormCheck from './FormCheck.svelte';
	import FormRange from './FormRange.svelte';
	import FormField from './FormField.svelte';
	import FormRadios from './FormRadios.svelte';
</script>

<section id="form">

	<h2>Form Elements</h2>
	<FormEl search label="Search" placeholder="Search ..." />

	<FormEl label="Name" placeholder="Form Text ..." />

	<FormEl label="Select" select />

	<FormEl label="File browser" file />
	
	<FormRange label="Range Slider" min="0" max="100" value="50" name="range" />

	<div class="grid">
		<div>
		<FormEl label="Color Bg" color value="#0eaaaa" />	
		</div>
		<div>
		<FormEl label="Color Text" color value="#333333" />	
		</div>
	</div>

	<div class="grid">
		<div>
			<FormField legend="Checkboxes">
			<FormCheck label="Checkbox 1" />
			<FormCheck label="Checkbox 2" />
			</FormField>
		</div>
		<div>
			<!-- Switch -->
			<FormField legend="Switches">
			<FormCheck toggle label="Switch 1" />
			<FormCheck toggle label="Switch 2" />
			</FormField>
		</div>
		
	</div>

	<FormField legend="Radio buttons">
		<FormRadios name="option1" />
	</FormField>

	<div class="grid">
	<Button type="reset" secondary onclick="event.preventDefault()">Reset</Button>
	<Button type="submit" onclick="event.preventDefault()">Submit</Button>
	</div>
		

</section>


<style ></style>


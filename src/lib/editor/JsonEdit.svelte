<script>
    import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	// import { supabase } from '../db';
	// const dispatch = createEventDispatcher();

	let jc_form;
	let jsoncreator;
	let loading = true;
	export let options = {};

	const handleCreatorChange = () => {
		let value = jsoncreator.getValue();
		console.log('Editor Change', value);
	};

	const handleCreatorReady = () => {
		console.log('Creator is ready!');
	};

	export const initCreator = () => {
		if (jsoncreator) {
			jsoncreator.destroy();
		}
		jsoncreator = new JSONEditor(jc_form, options);
		jsoncreator.on('ready', handleCreatorReady);
		jsoncreator.on('change', handleCreatorChange);
		loading = false;
	};
	onMount(async () => {
		if (options.schema) {
			initCreator();
		}
	});
	onDestroy(() => {
		if (jsoncreator) {
			jsoncreator.destroy();
		}
	});
    
</script>



<section {...$$restProps}>
	<div id="json-editor-form" bind:this={jc_form} />
</section>

{#if loading}
	<article>
		<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</article>
{/if}

<style>
	article {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	#json-editor-form img,
      #json-editor-form video {
          max-width: 100%;
          height: auto;
          max-height: 200px;
      }
  @media (min-width: 576px) {
    .modal-content {
      height: 100%;
    }
  }


  :global(.json-editor-btn-moveup.moveup.json-editor-btntype-move),
  :global(.json-editor-btn-movedown.movedown.json-editor-btntype-move),
  :global(.json-editor-btn-add.json-editor-btntype-add),
  :global(.json-editor-btn-edit.json-editor-btntype-editjson),
  :global(.json-editor-btn-edit_properties.json-editor-btntype-properties),
  :global(.json-editor-btn-copy.copy.json-editor-btntype-copy) {
    @apply inline-block px-4 py-2 mr-1 font-medium text-sm leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out;
  	@apply bg-blue-400 text-white hover:bg-blue-500  focus:bg-blue-500 active:bg-blue-600;
}

  :global(.json-editor-btn-delete.json-editor-btntype-deleteall),
  :global(.json-editor-btn-subtract.json-editor-btntype-deletelast),
  :global(.json-editor-btn-delete.delete.json-editor-btntype-delete) {
    @apply inline-block px-4 py-2 mr-1 font-medium text-sm leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out;
	@apply text-white bg-red-600 hover:bg-red-500 active:bg-red-600;
}

:global(.json-editor-btn-moveup.moveup.json-editor-btntype-move),
  :global(.json-editor-btn-collapse.json-editor-btntype-toggle),
  :global(.json-editor-btn-movedown.movedown.json-editor-btntype-move) {
    @apply inline-block px-4 py-2 mr-1 font-medium text-sm leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out;
	@apply  bg-gray-400 text-white hover:bg-gray-500  focus:bg-gray-500 active:bg-gray-600;
}
:global(.form-control) {
	@apply px-2 py-1;
}
:global(.form-control input[type='text']),
:global(.form-control input[type='number']),
:global(.form-control select),
:global(.form-control textarea) {
	@apply block w-full px-3 py-2 font-light text-base font-medium border border-gray-300 rounded;
}
:global(div[data-theme="html"] .je-indented-panel) {
  border: 0 !important;
  border-color: transparent !important;
}
:global(div[data-theme="html"] .row) {
 @apply mb-6;
}

:global(.je-header) {
	display: flex;
	align-items: center;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}
:global(.je-header label) {
	font-size: 1.5rem !important;
	align-self: center;
	padding: 0 !important;
	margin: 0 0 0 0 !important;
}


</style>

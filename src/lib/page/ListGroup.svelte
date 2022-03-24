<script>
let daten = [{
			path: '/',
			name: 'Start',
			icon: 'home'
		}];
</script>

<div class="flex flex-col">
    <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">

<slot></slot>
      
    </div>
  </div>

<style>

  .link {
    @apply inline-flex justify-center items-center px-2 py-1 min-h-14 min-w-12;
  }
  .link.active,
  .link:active {
    @apply text-blue-700;
  }
</style>


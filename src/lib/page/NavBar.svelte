<script>
 
  import IconMenu from '../../assets/svg1/menu.svelte';
  import IconClose from '../../assets/svg1/x.svelte'; 
  export let open = false;
  const toggle = () => {
    open = !open;
  };
</script>

<header>
  <nav class="text-white border-gray-200 px-2 bg-gray-800">
    <div class="flex flex-wrap items-center mx-auto">
      <a href="/" class="link">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3"
          alt="Flowbite Logo"
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Nwp-App
        </span>
      </a>
      <span class="flex-grow">

      </span>
      <slot></slot>
      <button
        on:click={toggle}
        type="button"
        class="link transition-all delay-200"
      >
      {#if open}
      <IconClose />
      {:else}
      <IconMenu />
      {/if}
    
      </button>
    </div>
  </nav>
</header>



<style>
  img {
    height: 28px;
  }
  .link {
    @apply inline-flex justify-center items-center px-2 py-1 min-h-14 min-w-12;
  }
  button {
    font-size: 28px;
  }
  .link.active,
  .link:active {
    @apply text-blue-700;
  }
</style>
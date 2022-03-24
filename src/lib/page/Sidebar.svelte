<script>
  
  import { clickOutside } from "./clickOutside";
  import IconClose from "../../assets/svg1/x.svelte";
  import ListGroup from "./ListGroup.svelte";
  import ListItem from "./ListItem.svelte";
  export let open = false;
  export  const navi = [
    {
      path: "/",
      name: "Start",
      icon: "home",
    },
    {
      path: "/list",
      name: "List",
      icon: "database",
    },
    {
      path: "/editor",
      name: "Editor",
      icon: "server",
    },
  ];  
  const handClickOut = () => {
    if (open) {
      open = false;
    }
  };
</script>

<aside class:open use:clickOutside on:clickOutside={handClickOut}>
  <header>
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3"
      alt="Flowbite Logo"
    />
    <span class="flex-grow self-center text-lg font-semibold whitespace-nowrap">
      Nwp-App
    </span>
    <button on:click={handClickOut} class="close-btn">
      <IconClose />
    </button>
  </header>
  <div on:click={handClickOut}>
    <ListGroup>
      {#each navi as { path, name, icon }, i}
        <ListItem href={path} {name} {icon} />
      {/each}
    </ListGroup> 
  </div>
  
</aside>

<div class:open class="overlay" />

<style>
  :root {
    --app-sb-width: 320px;
    --app-sb-width-minus: -320px;
    --app-sb-bg: #eee;
    --app-sb-color: #343a40;
  }
  aside {
    z-index: 30;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--app-sb-width);
    height: 100%;
    background: var(--app-sb-bg);
    color: var(--app-sb-color);
    left: 0;
    transform: translateX(-320px);
    transition: transform 0.5s ease-in-out;
  }

  aside.open {
    transform: translateX(0);
  }
  header {
    @apply flex items-center pl-2 min-h-14 bg-gray-800 text-white;
  }
  .close-btn {
    @apply inline-flex justify-center items-center px-2 py-1 min-h-14 min-w-12 opacity-35;
  }

  .close-btn {
    font-size: 28px;
  }
  img {
    height: 28px;
  }
  .overlay {
    display: none;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 25;
    transition: background-color 1000ms linear;
    overflow: hidden;
  }

  .overlay.open {
    display: block;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>

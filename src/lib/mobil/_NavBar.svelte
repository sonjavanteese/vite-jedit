<script>
    import {session, page} from '$app/stores';
    import IconHome from '../../../assets/svg1/home.svelte';
    export let version = 1;
    $: console.log($session.pageData);
</script>

{#if $page.url.pathname === '/mobil'}
     
<header class="bg-white sticky top-0 w-full z-20">
    <div class="absolute w-full h-full left-0 top-0 shadow-md bg-bars-material-light dark:bg-bars-material-dark"></div>
    <div class="flex relative items-center w-full overflow-hidden pl-4 pr-4 h-14 justify-between">
        <div class="flex justify-center items-center h-full mr-2 transform transform-gpu">
            <button on:click={() => history.back()} class="text-primary inline-flex space-x-1 justify-center items-center cursor-pointer select-none touch-ripple-primary relative z-10 h-full max-h-14 px-3 cursor-pointer min-w-12 touch-ripple-inset">
                <span class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
                        <polygon points="16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9"></polygon>
                    </svg>
                </span>
            </button>
        </div>
        <div class="text-black dark:text-white whitespace-nowrap leading-tight font-semibold absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center"> 
            {$session.pageData && $session.pageData.titel ? $session.pageData.titel : 'App-Name'}
            <div class="font-normal leading-none text-xs opacity-55"> 
                {$session.pageData && $session.pageData.sub ? $session.pageData.sub : 'Subtitel'}

            </div>
        </div>
        <div class="flex justify-center items-center h-full ml-2 transform transform-gpu">
            <a href="/" class="text-primary inline-flex space-x-1 justify-center items-center cursor-pointer select-none active:opacity-30 duration-300 active:duration-0 h-full max-h-14">
               <span style="font-size: 28px;"><IconHome /></span> 
            </a>
        </div>
    </div>
</header>

{:else}

<header class="w-full z-20 top-0 sticky text-navbar-material">
    <div class="absolute w-full h-full left-0 top-0 shadow-md bg-bars-material-light dark:bg-bars-material-dark"></div>
    <div class="flex relative items-center w-full overflow-hidden justify-start h-14  pl-4 pr-4">
        <div class="flex justify-center items-center h-full mx-1">
            <button on:click={() => history.back()} class="text-primary inline-flex space-x-1 justify-center items-center cursor-pointer select-none touch-ripple-primary relative z-10 h-full max-h-14 px-3 cursor-pointer min-w-12 touch-ripple-inset">
                <span class="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor">
                        <polygon points="16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9"></polygon>
                    </svg>
                </span>
            </button>
        </div>
        <div class="text-black dark:text-white whitespace-nowrap leading-tight font-medium mx-4 text-left"> 
            {$session.pageData && $session.pageData.titel ? $session.pageData.titel : 'App-Name'}
        </div>
    </div>
</header>

{/if}
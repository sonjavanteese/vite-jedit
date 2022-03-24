<script>
	import {session} from '$app/stores';
	import {page} from '$app/stores';
	$: console.log("WWWW", $page.url)
	export let prefix = "/mobil"
</script>

<footer class="bg-white bottom-0 fixed left-0 w-full z-20">
    <div class="absolute w-full h-full left-0 top-0 shadow-md bg-bars-material-light dark:bg-bars-material-dark transform rotate-180"></div>
    <div class="flex relative justify-between items-center w-full overflow-hidden h-14">
        <a href="{prefix}" class="{$page.url.pathname === '/mobil' ? 'text-primary' : 'text-black'} inline-flex space-x-1 justify-center items-center cursor-pointer relative z-10 w-full h-full duration-300 font-medium overflow-hidden text-opacity-55">
			<span class="absolute left-0 top-0 w-full h-0.5 bg-primary duration-300 transition-colors {$page.url.pathname === '/mobil' ? 'opacity-100' : 'opacity-0'}"></span> 
			<span>Tab 1 </span>
		</a>
        <a href="{prefix}/list" class="$page.url.pathname === '/mobil/list' ? 'text-primary' : 'text-black'} inline-flex space-x-1 justify-center items-center cursor-pointer relative z-10 w-full h-full duration-300 font-medium overflow-hidden text-opacity-55"> 
			<span class="absolute left-0 top-0 w-full h-0.5 bg-primary duration-300 transition-colors  {$page.url.pathname === '/mobil/list' ? 'opacity-100' : 'opacity-0'}"></span> 
			<span>Tab 2 </span>
		</a>
        <a href="{prefix}/editor" class="$page.url.pathname === '/mobil/editor' ? 'text-primary' : 'text-black'} inline-flex space-x-1 justify-center items-center cursor-pointer relative z-10 w-full h-full duration-300 font-medium overflow-hidden text-opacity-55"> 
			<span class="absolute left-0 top-0 w-full h-0.5 bg-primary duration-300 transition-colors  {$page.url.pathname === '/mobil/editor' ? 'opacity-100' : 'opacity-0'}"></span> 
			<span>Tab 3 </span>
		 </a>
    </div>
</footer>

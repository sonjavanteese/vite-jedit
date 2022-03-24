<script>
    
    export let href;
    export let name = 'Link';
    export let icon = null;
    export let exact = false;
    export let active = false;
</script>

<a
    href={href}
    title={icon ? icon : 'icon'}
    class="
    block
    px-6
    py-2
    border-b border-gray-200
    w-full
    text-lg
    hover:bg-gray-100 hover:text-gray-500
    focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
    transition
    duration-500
    cursor-pointer"
    class:active={active}
    >
    {name}
</a>


<style>

</style>
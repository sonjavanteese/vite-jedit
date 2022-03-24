

<script>
    // library for creating dropdown menu appear on click
    import { createPopper } from "@popperjs/core";
    import {active} from 'tinro';
    import { navi } from "../db";
    // core components
  
    let dropdownPopoverShow = false;
  
    let btnDropdownRef;
    let popoverDropdownRef;
  
    const toggleDropdown = () => {
      if (dropdownPopoverShow) {
        dropdownPopoverShow = false;
      } else {
        dropdownPopoverShow = true;
        createPopper(btnDropdownRef, popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    };
  </script>
  
  <div class="inline-flex">
    <div class="w-full px-1">
      <div class="relative inline-flex align-middle w-full">
        <button class="text-white font-bold capitalize text-sm px-4 py-2 rounded shadow outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-900 ease-linear transition-all duration-150" type="button" bind:this="{btnDropdownRef}"
        on:click={toggleDropdown}>
          Navi
        </button>
        <div bind:this="{popoverDropdownRef}" class="bg-white rounded text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48 {dropdownPopoverShow ? 'block':'hidden'}">
          {#each navi as {path, name}}
            <a href={path} 
            use:active 
            class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            data-active-class="bg-gray-300" 
            data-exact={path === '/'}
            on:click={toggleDropdown}>
              {name}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
  
  
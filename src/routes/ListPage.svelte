<script>
  import Select from "svelte-select";
  import Item from "./sub/BeerItem.svelte";
  import loadOptions from "./sub/beers.js";
  import Icon from "./sub/Icon.svelte";

  const items = ["One", "Two", "Three"];

  const complexItems = [
    { value: "chocolate", label: "Chocolate", group: "Sweet" },
    { value: "pizza", label: "Pizza", group: "Savory" },
    { value: "cake", label: "Cake", group: "Sweet", selectable: false },
    { value: "chips", label: "Chips", group: "Savory" },
    { value: "ice-cream", label: "Ice Cream", group: "Sweet" },
  ];

  const groupBy = (item) => item.group;
  const optionIdentifier = "id";
  const getOptionLabel = (option) => option.name;
  const getSelectionLabel = (option) => option.name;
</script>

<section class="content py-4">

  <h4>Complex</h4>
  <Select items={complexItems} />

  <h4>Group</h4>
  <Select items={complexItems} {groupBy} />

  <h4>Multi</h4>
  <Select items={complexItems} isMulti={true} />

  <h4>Async</h4>
  <Select
    {loadOptions}
    {optionIdentifier}
    {getSelectionLabel}
    {getOptionLabel}
    {Item}
    placeholder="Search for 🍺"
  />

<!--   <div class="themed">
    <h4>Theming</h4>
    <Select {items} />
  </div> -->

  <div class="icon">
    <h4>Icons</h4>
    <Select {items} {Icon} showChevron={true} />
  </div>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
    tenetur deserunt laborum? Consectetur iusto dolorum impedit odit, obcaecati
    excepturi sed incidunt, perspiciatis a facere repudiandae illo beatae.
    Necessitatibus, maxime similique?
  </p>
</section>

<style>
  /* 	
            CSS variables can be used to control theming.
            https://github.com/rob-balfre/svelte-select/blob/master/docs/theming_variables.md
        */

  .themed {
    --border: 3px solid blue;
    --borderRadius: 10px;
    --placeholderColor: blue;
  }

  .icon {
    --selectedItemPadding: 0 10px 0 8px;
    --inputPadding: 0 10px 0 40px;
  }
</style>

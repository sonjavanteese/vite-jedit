<script>
  import JsonEdit from "../lib/editor/JsonEdit.svelte";
  import {editor_ops} from '../lib/stores';
</script>


<section class="content py-4">
    <JsonEdit options={$editor_ops} />
</section>

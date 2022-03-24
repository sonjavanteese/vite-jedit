<script>
  import ListPage from './routes/ListPage.svelte';
  import Start from './routes/Start.svelte';
  import CheckNavi from './lib/page/CheckNavi.svelte';
  import Sidebar from "./lib/page/Sidebar.svelte";
  import Page from "./lib/page/Page.svelte";
  import { pages } from "./lib/db";
  import NavBar from "./lib/page//NavBar.svelte";
  import EditorPage from './routes/EditorPage.svelte';
  import { Route, router } from "tinro";
  import PageHeader from "./lib/page/PageHeader.svelte";
  router.mode.hash();
  let open;
</script>

<Sidebar bind:open />
<NavBar bind:open><CheckNavi /></NavBar>
<main>
  <Route path="/">
    <Page>
      <PageHeader {...pages[0]} />
      <Start />
    </Page>
  </Route>
  <Route path="/list">
    <Page>
      <PageHeader {...pages[1]} />
      <ListPage />
    </Page>
  </Route>
  <Route path="/editor">
    <Page>
      <PageHeader {...pages[2]} />
      <EditorPage />
    </Page>
  </Route>
</main>



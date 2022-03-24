const temp = (props)  => `
<div id="appbar" class="appbar" data-theme="dark">
<nav class="container-fluid">
  <ul>
    <li><a href="./" class="contrast" onclick="event.preventDefault()"><strong>Brand</strong></a></li>
  </ul>
  <ul>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" class="contrast">Navigation</summary>
        <ul role="listbox" data-nav>
          <li><a href="#/">Start</a></li>
          <li><a href="#/list">List</a></li>
          <li><a href="#/editor">Editor</a></li>
        </ul>
      </details>
    </li>
    <!-- <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" class="contrast">Examples</summary>
        <ul role="listbox">
          <li><a href="../preview/">Preview</a></li>
          <li><a href="../preview-rtl/">Right-to-left</a></li>
          <li><a href="../classless/">Class-less</a></li>
          <li><a href="../basic-template/">Basic template</a></li>
          <li><a href="../company/">Company</a></li>
          <li><a href="../google-amp/">Google Amp</a></li>
          <li><a href="../sign-in/">Sign in</a></li>
          <li><a href="../bootstrap-grid/">Bootstrap grid</a></li>
        </ul>
      </details>
    </li>  -->
  </ul>
</nav>
</div>
<main id="main">

</main>
`;

export default temp;
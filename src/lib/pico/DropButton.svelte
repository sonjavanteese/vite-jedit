

<!-- Primary -->
<details role="list">
    <summary aria-haspopup="listbox" role="button">
      Dropdown as a button 1
    </summary>
    <ul role="listbox">
      <li><a>Action</a></li>
      <li><a>Another action</a></li>
      <li><a>Something else here</a></li>
    </ul>
  </details>
  
  <!-- Secondary -->
  <details role="list">
    <summary aria-haspopup="listbox" role="button" class="secondary">
      Dropdown as a button 2
    </summary>
    <ul role="listbox">
      <li><a>Action</a></li>
      <li><a>Another action</a></li>
      <li><a>Something else here</a></li>
    </ul>
  </details>
  
  <!-- Contrast -->
  <details role="list">
    <summary aria-haspopup="listbox" role="button" class="contrast">
      Dropdown as a button 3
    </summary>
    <ul role="listbox">
      <li><a>Action</a></li>
      <li><a>Another action</a></li>
      <li><a>Something else here</a></li>
    </ul>
  </details>

<style >/**
 * Theme: default
 */
:root {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.5rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;

}
dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}








/**
 * Button
 */
 .button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

.button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

.button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role=button] {
  display: inline-block;
  text-decoration: none;
}

.button,
input[type=submit],
input[type=button],
input[type=reset],
[role=button] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--.button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
.button:is([aria-current], :hover, :active, :focus),
input[type=submit]:is([aria-current], :hover, :active, :focus),
input[type=button]:is([aria-current], :hover, :active, :focus),
input[type=reset]:is([aria-current], :hover, :active, :focus),
[role=button]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--.button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
.button:focus,
input[type=submit]:focus,
input[type=button]:focus,
input[type=reset]:focus,
[role=button]:focus {
  --box-shadow: var(--.button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(.button, input[type=submit], input[type=button], [role=button]).secondary,
input[type=reset] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(.button, input[type=submit], input[type=button], [role=button]).secondary:is([aria-current], :hover, :active, :focus),
input[type=reset]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(.button, input[type=submit], input[type=button], [role=button]).secondary:focus,
input[type=reset]:focus {
  --box-shadow: var(--.button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(.button, input[type=submit], input[type=button], [role=button]).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(.button, input[type=submit], input[type=button], [role=button]).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(.button, input[type=submit], input[type=button], [role=button]).contrast:focus {
  --box-shadow: var(--.button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(.button, input[type=submit], input[type=button], [role=button]).outline,
input[type=reset].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(.button, input[type=submit], input[type=button], [role=button]).outline:is([aria-current], :hover, :active, :focus),
input[type=reset].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(.button, input[type=submit], input[type=button], [role=button]).outline.secondary,
input[type=reset].outline {
  --color: var(--secondary);
}
:is(.button, input[type=submit], input[type=button], [role=button]).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type=reset].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(.button, input[type=submit], input[type=button], [role=button]).outline.contrast {
  --color: var(--contrast);
}
:is(.button, input[type=submit], input[type=button], [role=button]).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(.button, [type="submit"], [type="button"], [type="reset"], [role="button"])[disabled],
:where(fieldset[disabled]) :is(.button, [type=submit], [type=button], [type=reset], [role=button]),
a[role=button]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}








/**
 * Dropdown ([role="list"])
 */
details[role=list],
li[role=list] {
  position: relative;
}

details[role=list] summary + ul,
li[role=list] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role=list] summary + ul li,
li[role=list] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5) var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role=list] summary + ul li:first-of-type,
li[role=list] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role=list] summary + ul li:last-of-type,
li[role=list] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role=list] summary + ul li a,
li[role=list] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5) calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role=list] summary + ul li a:hover,
li[role=list] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role=list] summary::after,
li[role=list] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role=list] {
  padding: 0;
  border-bottom: none;
}
details[role=list] summary {
  margin-bottom: 0;
}
details[role=list] summary:not([role]) {
  height: calc(1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 + var(--border-width) * 2);
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
details[role=list] summary:not([role]):active, details[role=list] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role=list] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role=list][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role=list][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role=list] summary,
nav li[role=list] a {
  display: flex;
  direction: ltr;
}

nav details[role=list] summary + ul,
nav li[role=list] > ul {
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role=list] summary + ul li a,
nav li[role=list] > ul li a {
  border-radius: 0;
}

nav details[role=list] summary,
nav details[role=list] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role=list][open] summary {
  border-radius: var(--border-radius);
}
nav details[role=list] summary + ul {
  margin-top: var(--outline-width);
  margin-inline-start: 0;
}
nav details[role=list] summary[role=link] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role=list] summary[role=link] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role=list]:hover > ul,
li[role=list] a:active ~ ul,
li[role=list] a:focus ~ ul {
  display: flex;
}
li[role=list] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  margin-inline-start: calc(var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal));
}
li[role=list] > a::after {
  background-image: var(--icon-chevron);
}
</style>
const temp = (props)  => `
  <div id="signin" class="container">
      <article class="grid">
          <div>
              <hgroup>
                  <h1>Sign in</h1>
                  <h2>A minimalist layout for Login pages</h2>
              </hgroup>
              <form id="login">
                  <input type="email" name="email" id="email" placeholder="Email" required>
                  <input type="password" id="password" name="password" placeholder="Password" required>
                  <fieldset>
                      <label for="remember">
                          <input type="checkbox" role="switch"> Remember me </label>
                  </fieldset>
                  <button type="submit" class="contrast">Login</button>
              </form>
          </div>
          <aside></aside>
      </article>
  </div>
`;

export default temp;
const temp = (props)  => `
  <div class="hero" data-theme="dark">
      <header class="container">
          <hgroup>
              <h1>Company</h1>
              <h2>A classic company or blog layout with a sidebar</h2>
          </hgroup>
          <p><a href="#/logout" role="button" class="LogOut">Log Out</a></p>
      </header>
  </div>
  <section class="main container">
      <div class="grid">
          <section>
              <hgroup>
                  <h2>Ut sit amet sem ut velit</h2>
                  <h3>Quisque mi est</h3>
              </hgroup>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis est vel velit bibendum ultrices. Sed aliquam tortor vel odio fermentum ullamcorper eu vitae neque. Sed non diam at tellus venenatis viverra. Vestibulum et leo laoreet arcu tempor eleifend venenatis ac leo. Pellentesque euismod justo sed nisl sollicitudin varius. Duis venenatis nisl sit amet ante rutrum posuere. Etiam nec ullamcorper leo, sed placerat mauris.</p>
              <figure>
                  <img src="https://source.unsplash.com/3Ijt7UkSBYE/1500x750" alt="Architecture">
                  <figcaption>Image from <a href="https://unsplash.com">unsplash.com</a></figcaption>
              </figure>
              <h3>Nulla augue metus</h3>
              <p>Pacilisis sed ante ut, posuere volutpat quam. Maecenas maximus blandit mi ac finibus. Proin quis lacinia tellus. Aliquam erat volutpat. Aliquam erat volutpat. Phasellus suscipit nisi augue, id accumsan tortor auctor ut. Duis odio arcu, egestas nec nulla vel, fermentum bibendum ex.</p>
              <h3>Sed purus sapien, porta a cursus sed, maximus et metus.</h3>
              <p>Phasellus molestie ante sed massa bibendum, eget tempus ex sollicitudin. Vestibulum libero nulla, porttitor nec faucibus et, scelerisque eget quam. Nullam finibus tempor dui, vel congue urna condimentum ac. Fusce ultricies mauris justo, nec vulputate mauris pulvinar eu. Sed tempus ligula lorem, at tincidunt risus mollis non. Quisque et turpis sit amet sapien gravida ullamcorper in eu velit. Curabitur luctus ornare finibus. Proin tempor nulla sagittis est fermentum dapibus. Vestibulum posuere mattis congue. Ut porttitor id sem euismod tristique. Quisque mi est, posuere nec lorem eu, vulputate vehicula diam. Nullam scelerisque, libero posuere efficitur bibendum, urna odio finibus lorem, sed volutpat dolor ligula in dolor. Suspendisse suscipit efficitur neque, ut porta tellus mollis vel. Nam consequat arcu ac tellus porta, nec egestas orci sodales.</p>
          </section>
          <aside>
              <a href="#" aria-label="Example" onclick="event.preventDefault()"><img src="https://source.unsplash.com/T5nXYXCf50I/1500x750" alt="Architecture"></a>
              <p>
                  <a href="#" onclick="event.preventDefault()">Donec sit amet</a><br>
                  <small>Class aptent taciti sociosqu ad litora torquent per conubia nostra</small>
              </p>
              <a href="#" aria-label="Example" onclick="event.preventDefault()"><img src="https://source.unsplash.com/tb4heMa-ZRo/1500x750" alt="Architecture"></a>
              <p>
                  <a href="#" onclick="event.preventDefault()">Suspendisse potenti</a><br>
                  <small>Proin non condimentum tortor. Donec in feugiat sapien.</small>
              </p>
              <a href="#" aria-label="Example" onclick="event.preventDefault()"><img src="https://source.unsplash.com/Ru3Ap8TNcsk/1500x750" alt="Architecture"></a>
              <p>
                  <a href="#" onclick="event.preventDefault()">Nullam lobortis placerat aliquam</a><br>
                  <small>Maecenas vitae nibh blandit dolor commodo egestas vel eget neque. Praesent semper justo orci, vel imperdiet mi auctor in.</small>
              </p>
          </aside>
      </div>
  </section>
  <section aria-label="Subscribe example">
      <div class="container">
          <article>
              <hgroup>
                  <h2>Subscribe</h2>
                  <h3>Litora torquent per conubia nostra</h3>
              </hgroup>
              <form class="grid form">
                  <input type="text" id="firstname" name="firstname" placeholder="First name" aria-label="First name" required>
                  <input type="email" id="email" name="email" placeholder="Email address" aria-label="Email address" required>
                  <button type="submit">Subscribe</button>
              </form>
          </article>
      </div>
  </section>
`;

export default temp;
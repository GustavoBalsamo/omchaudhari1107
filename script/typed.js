var options = {
  strings: [
    '<span class="typed-react">React.js</span>', 
    '<span class="typed-ts">TypeScript</span>',
    '<span class="typed-mysql">MySQL</span>',
    '<span class="typed-htmlcssjs">HTML</span>, <span class="typed-css">CSS</span>, <span class="typed-js">JS</span>',
    '<span class="typed-laravel">Laravel</span>',
    '<span class="typed-vue">Vue.js</span>',
    '<span class="typed-jest">Jest</span>',
    '<span class="typed-flask">Flask</span>',
    '<span class="typed-nginx">Nginx</span>',
    '<span class="typed-python">Python</span>',
    '<span class="typed-django">Django</span>',
    '<span class="typed-nodejs">Node.js</span>',
    '<span class="typed-linux">Linux</span>',
    '<span class="typed-git">Git & GitHub</span>',
    '<span class="typed-docker">Docker</span>',
    '<span class="typed-graphql">APIs REST</span>'
  ],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 2000,
  loop: true
};

var typed = new Typed('.multiple-filed', options);

document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll('.menu-item');
  for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", function() {
          var currentActive = document.querySelector('.menu-item.act');
          if (currentActive) {
              currentActive.classList.remove("act");
          }
          this.classList.add("act");
      });
  }
});

window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};

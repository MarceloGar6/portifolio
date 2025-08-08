window.addEventListener('scroll', function() {
  const menu = document.querySelector('.menu');
  const home = document.querySelector('#home');
  if(window.scrollY > 10) {
    menu.classList.add('menu--scrolled');
    home.classList.add('home--scrolled');
  } else {
    menu.classList.remove('menu--scrolled');
    home.classList.remove('home--scrolled');
  }
});

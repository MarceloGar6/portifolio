const sections = ['home', 'about', 'skills', 'contact'];
const menuItem = document.querySelectorAll('.menu-list__item');
const imagemProgramador = document.querySelector('#programador-img');
const skillsItem = document.querySelectorAll('.skills__item');

window.addEventListener('scroll', function () {
  const menu = document.querySelector('.menu');
  const home = document.querySelector('#home');
  const metadeTela = window.innerHeight / 2;

  if (window.scrollY > 2) {
    menu.classList.add('menu--scrolled');
    home.classList.add('home--scrolled');
  } else {
    menu.classList.remove('menu--scrolled');
    home.classList.remove('home--scrolled');
  }
  
  sections.forEach((id, index) => {
    const section = document.getElementById(id);
    const item = menuItem[index];
    if (section && item) {
      const topo = section.getBoundingClientRect().top;
      if (topo <= metadeTela && topo + section.offsetHeight > metadeTela) {
        menuItem.forEach(i => i.classList.remove('item__ativo'));
        item.classList.add('item__ativo');
      }
    }
  });
});

skillsItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.skills__item__texto').style.fontSize = '20px'
  });
  item.addEventListener('mouseout', () => {
    item.querySelector('.skills__item__texto').style.fontSize = '0'
  });
});

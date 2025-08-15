const sections = ['home', 'about', 'skills', 'contact'];
const menuItem = document.querySelectorAll('.menu-list__item');
const imagemProgramador = document.querySelector('#programador-img');
const skillsItem = document.querySelectorAll('.skills__item');
const slides = document.querySelectorAll('.certificados__carrocel__img');
const btnAnterior = document.querySelector('#certificados__anterior');
const btnProximo = document.querySelector('#certificados__proximo');

let slideIndex = 0;

window.addEventListener('scroll', function () {
  const menu = document.querySelector('.menu');
  const home = document.querySelector('#home');
  const metadeTela = window.innerHeight / 2.5;

  if (window.scrollY > 10) {
    menu.classList.add('menu--scrolled');
    home.classList.add('home--scrolled');
    if (menuList.classList.contains('menu-list--ativo')) {
      menu.style.borderRadius = '0 0 40px 0';
    } else {
      menu.style.borderRadius = '';
    }
  } else {
    menu.classList.remove('menu--scrolled');
    home.classList.remove('home--scrolled');
    menu.style.borderRadius = '';
  }
  
  sections.forEach((id, index) => {
    const section = document.getElementById(id);
    const item = menuItem[index];
    const sectionEspecifica = document.querySelector(`#${id}`);
    if (section && item) {
      const topo = section.getBoundingClientRect().top;
      if (topo <= metadeTela && topo + section.offsetHeight > metadeTela) {
        menuItem.forEach(i => i.classList.remove('item__ativo'));
        item.classList.add('item__ativo');
        sectionEspecifica.classList.add(`section--ativa`);
      }
    }
  });
});

skillsItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    if (window.innerWidth > 780) {
      item.querySelector('.skills__item__texto').style.fontSize = '20px';
    } else if (window.innerWidth >= 600) {
      item.querySelector('.skills__item__texto').style.fontSize = '16px'
    } else if (window.innerWidth < 600) {
      item.querySelector('.skills__item__texto').style.fontSize = '14px'
    }
  });
  item.addEventListener('mouseout', () => {
    item.querySelector('.skills__item__texto').style.fontSize = '0'
  });
});


btnProximo.addEventListener('click', proximoSlide);
btnAnterior.addEventListener('click', slideAnterior);

function mostrarSlide(){
  slides[slideIndex].classList.add('on');
}

function proximoSlide(){
  let slideAnterior = slideIndex;
  slides[slideAnterior].classList.add('saindo-esquerda');
  setTimeout(() => {
    slides[slideAnterior].classList.remove('on', 'saindo-esquerda');
  }, 500);
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  mostrarSlide();
}

function slideAnterior(){
  let slideAnterior = slideIndex;
  slides[slideAnterior].classList.add('saindo-direita');
  setTimeout(() => {
    slides[slideAnterior].classList.remove('on', 'saindo-direita');
  }, 500);
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  mostrarSlide();
}

const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuList = document.querySelector('.menu-list');
const menu = document.querySelector('.menu');

if (menuHamburguer && menuList) {
  menuHamburguer.addEventListener('click', () => {
    menuList.classList.toggle('menu-list--ativo');
    if (menuList.classList.contains('menu-list--ativo')) {
      if (window.scrollY > 10) {
        menu.style.borderRadius = '0 0 40px 0';
      } else {
        menu.style.borderRadius = '';
      }
      menu.style.backgroundColor = 'rgb(241, 241, 241)';
    } else {
      menu.style.borderRadius = '';
      menu.style.backgroundColor = '';
    }
  });
  // Fecha o menu ao clicar em um item
  menuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.remove('menu-list--ativo');
      menu.style.borderRadius = '';
      menu.style.backgroundColor = '';
    });
  });
}
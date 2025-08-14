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
  const metadeTela = window.innerHeight / 2;

  if (window.scrollY > 10) {
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
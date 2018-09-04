export const menuUp = (page) => {
  // console.log('page: ', page);
  // const element = document.getElementById(page);
  page.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  const navMobile = document.querySelector('.nav-mobile');
  const hamburger = document.querySelector('.hamburger-container');
  if(navMobile && hamburger){
    navMobile.style.cssText = '';
    hamburger.style.cssText = '';
  }
}

export const scrollPage = (scroll_pos) => {
  var banner = document.querySelector('.banner');
  var backColor = document.querySelector('.back-color');
  var pos = scroll_pos;
  var navBelt = document.querySelector('.belt-nav');
  if (navBelt !== null) {

    if (window.innerHeight < window.scrollY + 70) {
      if (!navBelt.classList.contains('belt-nav-top')) {
        navBelt.classList.add('belt-nav-top');
        backColor.style = 'transform: translateY(0)';
      }
    } else {
      if (navBelt.classList.contains('belt-nav-top')) {
        navBelt.classList.remove('belt-nav-top');
        backColor.style.cssText = '';
      }
    }
    banner.style = `transform: translateY( ${-pos / 2}px)`;
  }
}

export const showElement = () => {
  const showText = document.querySelector('.show-text');
  showText.style.width = '160px';
  showText.style.transform = 'translateX(0) rotate(0) scale(1)';
  showText.style.color = 'rgb(0, 146, 204)';
}

export const hideElement = () => {
  const showText = document.querySelector('.show-text');
  showText.style.cssText = '';
}

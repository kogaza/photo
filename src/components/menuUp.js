export const menuUp = (page) => {
  const element = document.getElementById(page);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  const navMobile = document.querySelector('.nav-mobile');
  const hamburger = document.querySelector('.hamburger-container');
  navMobile.style.cssText = '';
  hamburger.style.cssText = '';
}
export const scrollPage = (scroll_pos) => {
  var banner = document.querySelector('.banner');
  var bannerContainer = document.querySelector('.banner-container');
  var backColor = document.querySelector('.back-color');
  var pos = scroll_pos;
  var navBelt = document.querySelector('.belt-nav');
  var aboutUs = document.querySelector('.about-us');
  var navBar = document.querySelector('nav');
  // var navBarPosition = navBar.getBoundingClientRect().top;
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




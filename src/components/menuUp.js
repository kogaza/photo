export const menuUp = (page) => {
  var element = document.getElementById(page);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
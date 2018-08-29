import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import '../App.css';
import StudioOffer from './StudioOffer'
import StudioGallery from './StudioGallery'
import Kindergarten from './Kindergarten'
import Contact from './Contact'
import AboutUs from './AboutUs'

function doSomething(scroll_pos) {
  var banner = document.querySelector('.banner');
  var bannerContainer = document.querySelector('.banner-container');
  var backColor = document.querySelector('.back-color');
  var pos = scroll_pos;
  var navBelt = document.querySelector('.belt-nav');
  var aboutUs = document.querySelector('.about-us');
  var navBar = document.querySelector('nav');
  var navBarPosition = navBar.getBoundingClientRect().top;

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

window.addEventListener('scroll', function (e) {
  window.requestAnimationFrame(function () {
    doSomething(window.scrollY);
  });
});

const Studio = () => (
  <div>
    <div className="banner-container">
      <div className="banner"></div>
    </div>
    <div className="belt-nav">
      <div className="container">
        <nav>
          <Link to="/"><div id="logo"></div></Link>
          <ul>
            <li>
              <Link to="/studio"> Studio </Link>
            </li>
            <li>
              <Link to="/studio/offer"> Oferta </Link>
            </li>
            <li>
              <Link to="/studio/gallery"> Galeria </Link>
            </li>
            <li>
              <Link to="/kindergarten"> Przedszkole </Link>
            </li>
            <li>
              <Link to="studio/contact"> Kontakt </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="back-color">
      {/* <div className="container"> */}
        <Switch>
          <Route exact path="/studio" component={AboutUs} />
          <Route exact path="/studio/gallery" component={StudioGallery} />
          <Route exact path="/studio/offer" component={StudioOffer} />
          <Route exact path="/kindergarten" component={Kindergarten} />
          <Route exact path="/studio/contact" component={Contact} />
        </Switch>
      {/* </div> */}
    </div>
  </div >


);

export default Studio;


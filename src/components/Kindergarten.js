import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import KindergartenOffer from './KindergartenOffer'
import KindergartenGallery from './KindergartenGallery'
import Contact from './Contact'
import AboutUsKindergarten from './AboutUsKindergarten';
import { menuUp, scrollPage, showElement, hideElement } from './functions'


window.addEventListener('scroll', function (e) {
  window.requestAnimationFrame(function () {
    scrollPage(window.scrollY);
  });
});

const showMobileMenu = () => {
  const hamburger = document.querySelector('.hamburger-container');
  const navMobile = document.querySelector('.nav-mobile');
  hamburger.style.transform = 'scale(0)';
  navMobile.style.display = 'block';
}

const Kindergarten = () => (
  <div>
    <div className="hamburger-container" onClick={() => showMobileMenu()}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div>
    <Link to="/"><div id="logo-portrait"></div></Link>
    <nav className="nav-mobile">
      <ul>
        <li onClick={() => menuUp('about-us-kindergarten')}>
          <Link to="/kindergarten"> Studio </Link>
        </li>
        <li onClick={() => menuUp('about-us-kindergarten-offer')}>
          <Link to="/kindergarten/offer"> Oferta </Link>
        </li>
        <li onClick={() => menuUp('about-us-kindergarten-gallery')}>
          <Link to="/kindergarten/gallery"> Galeria </Link>
        </li>
        <li onClick={() => menuUp('about-us-contact')}>
          <Link to="kindergarten/contact"> Kontakt </Link>
        </li>
      </ul>
    </nav>
    <div id="banner-kindergarten" className="banner-container">
      <div className="banner banner-kindergarten"></div>
    </div>
    <div className="belt-nav">
      <div className="container">
        <nav>
          <Link to="/"><div id="logo"></div></Link>
          <ul>
            <li onClick={() => menuUp('about-us-kindergarten')}>
              <Link to="/kindergarten"> Studio </Link>
            </li>
            <li onClick={() => menuUp('about-us-kindergarten-offer')}>
              <Link to="/kindergarten/offer"> Oferta </Link>
            </li>
            <li onClick={() => menuUp('about-us-kindergarten-gallery')}>
              <Link to="/kindergarten/gallery"> Galeria </Link>
            </li>
            <li onClick={() => menuUp('about-us-contact')}>
              <Link to="kindergarten/contact"> Kontakt </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="show-second">
        <div className="show-text" >
          <span>Zobacz również <br /> <b>Fotografię studyjną</b></span>
        </div>
        <Link to="/studio">
          <div className="show-photo show-studio-photo"
            onClick={() => menuUp('banner-kindergarten')}
            onMouseOver={() => showElement()}
            onMouseOut={() => hideElement()}
          >
          </div>
        </Link>
      </div>
    </div>
    <div className="back-color">
      <Switch>
        <Route exact path="/kindergarten" component={AboutUsKindergarten} />
        <Route exact path="/kindergarten/offer" component={KindergartenOffer} />
        <Route exact path="/kindergarten/gallery" component={KindergartenGallery} />
        <Route exact path="/kindergarten/contact" component={Contact} />
      </Switch>
    </div>
  </div>
);

export default Kindergarten;


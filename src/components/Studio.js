import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import '../App.css';
import StudioOffer from './StudioOffer'
import StudioGallery from './StudioGallery'
import StudioClient from './StudioClient'
import Kindergarten from './Kindergarten'
import Contact from './Contact'
import AboutUsStudio from './AboutUsStudio'
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

const Studio = () => (
  <div>
    <div className="hamburger-container" onClick={() => showMobileMenu()}>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
    </div>
    <Link to="/"><div id="logo-portrait"></div></Link>
    <nav className="nav-mobile">
      <ul>
        <li >
          <Link to="/studio"> Studio </Link>
        </li>
        <li >
          <Link to="/studio/offer"> Oferta </Link>
        </li>
        <li >
          <Link to="/studio/gallery"> Galeria </Link>
        </li>
        <li >
          <Link to="/studio/client"> Panel klienta </Link>
        </li>
        <li >
          <Link to="studio/contact"> Kontakt </Link>
        </li>
      </ul>
    </nav>
    <div id="banner-studio" className="banner-container">
      <div className="banner banner-woman"></div>
    </div>
    <div className="belt-nav">
      <div className="container">
        <nav>
          <Link to="/"><div id="logo"></div></Link>
          <ul>
            <li >
              <Link to="/studio"> Studio </Link>
            </li>
            <li >
              <Link to="/studio/offer"> Oferta </Link>
            </li>
            <li >
              <Link to="/studio/gallery"> Galeria </Link>
            </li>
            <li >
              <Link to="/studio/client"> Panel klienta </Link>
            </li>
            <li >
              <Link to="studio/contact"> Kontakt </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="show-second">
        <div className="show-text" >
          <span>Zobacz również <br /> <b>Fotografię przedszkolną</b></span>
        </div>
        <Link to="/kindergarten">
          <div className="show-photo show-kindergarten-photo"
            onClick={() => menuUp('banner-studio')}
            onMouseOver={() => showElement()}
            onMouseOut={() => hideElement()}
          >
          </div>
        </Link>
      </div>
    </div>
    <div className="back-color">
      <Switch>
        <Route exact path="/studio" component={AboutUsStudio} />
        <Route exact path="/studio/offer" component={StudioOffer} />
        <Route exact path="/studio/gallery" component={StudioGallery} />
        <Route exact path="/studio/client" component={StudioClient} />
        <Route exact path="/kindergarten" component={Kindergarten} />
        <Route exact path="/studio/contact" component={Contact} />
      </Switch>
    </div>
  </div >
);

export default Studio;


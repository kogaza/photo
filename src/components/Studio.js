import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import '../App.css';
import StudioOffer from './StudioOffer'
import StudioGallery from './StudioGallery'
import Kindergarten from './Kindergarten'
import Contact from './Contact'
import AboutUs from './AboutUs'
import {scrollPage} from './scrollPage'

window.addEventListener('scroll', function (e) {
  window.requestAnimationFrame(function () {
    scrollPage(window.scrollY);
  });
});

const Studio = () => (
  <div>
    <div className="banner-container">
      <div className="banner banner-woman"></div>
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
              <Link to="/kindergarten"> Fotografia przedszkolna </Link>
            </li>
            <li>
              <Link to="studio/contact"> Kontakt </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="back-color">
      <Switch>
        <Route exact path="/studio" component={AboutUs} />
        <Route exact path="/studio/gallery" component={StudioGallery} />
        <Route exact path="/studio/offer" component={StudioOffer} />
        <Route exact path="/kindergarten" component={Kindergarten} />
        <Route exact path="/studio/contact" component={Contact} />
      </Switch>
    </div>
  </div >
);

export default Studio;


import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import Studio from './Studio'
import KindergartenOffer from './KindergartenOffer'
import KindergartenGallery from './KindergartenGallery'
import Contact from './Contact'
import AboutUs from './AboutUs';
import {scrollPage} from './scrollPage'

window.addEventListener('scroll', function (e) {
  window.requestAnimationFrame(function () {
    scrollPage(window.scrollY);
  });
});

const Kindergarten = () => (
  <div>
    <div className="banner-container">
      <div className="banner banner-kindergarten"></div>
    </div>
    <div className="belt-nav">
      <div className="container">
        <nav>
          <Link to="/"><div id="logo"></div></Link>
          <ul>
            <li>
              <Link to="/kindergarten"> Studio </Link>
            </li>
            <li>
              <Link to="/kindergarten/offer"> Oferta </Link>
            </li>
            <li>
              <Link to="/kindergarten/gallery"> Galeria </Link>
            </li>
            <li>
              <Link to="/studio"> Fotografia studyjna </Link>
            </li>
            <li>
              <Link to="kindergarten/contact"> Kontakt </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="back-color">
      <Switch>
        <Route exact path="/kindergarten" component={AboutUs} />
        <Route exact path="/kindergarten/offer" component={KindergartenOffer} />
        <Route exact path="/kindergarten/gallery" component={KindergartenGallery} />
        <Route exact path="/studio" component={Studio} />
        <Route exact path="/kindergarten/contact" component={Contact} />
      </Switch>
    </div>
  </div>
);

export default Kindergarten;


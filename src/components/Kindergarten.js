import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import KindergartenOffer from './KindergartenOffer'
import KindergartenGallery from './KindergartenGallery'
import Contact from './Contact'
import AboutUsKindergarten from './AboutUsKindergarten';
import { scrollPage } from './scrollPage'
import { menuUp } from './menuUp'


window.addEventListener('scroll', function (e) {
  window.requestAnimationFrame(function () {
    scrollPage(window.scrollY);
  });
});

const showStudio = () => {
  const showText = document.querySelector('.show-text');
  showText.style.width = '160px';
  showText.style.transform = 'translateX(0) rotate(0) scale(1)';
  showText.style.color = 'rgb(0, 146, 204)';
}
const hideStudio = () => {
  const showText = document.querySelector('.show-text');
  showText.style.cssText = '';
}

const Kindergarten = () => (
  <div>
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
            <li>
              <Link to="/kindergarten/offer"> Oferta </Link>
            </li>
            <li>
              <Link to="/kindergarten/gallery"> Galeria </Link>
            </li>
            <li>
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
            onMouseOver={() => showStudio()}
            onMouseOut={() => hideStudio()}
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


import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import '../App.css';
import StudioOffer from './StudioOffer'
import StudioGallery from './StudioGallery'
import Kindergarten from './Kindergarten'
import Contact from './Contact'
import AboutUs from './AboutUs'

// var last_known_scroll_position = 0;
// var ticking = false;

// function doSomething(scroll_pos) {
//   var banner = document.querySelector('.banner');
//   var pos = scroll_pos;
//   // do something with the scroll position
//   console.log("działa", scroll_pos);
//   console.log(`position: ${scroll_pos} px`);
//   banner.style = `transform: translateY( ${-pos/2}px)`;
// }

// window.addEventListener('scroll', function(e) {

//   last_known_scroll_position = window.scrollY;

//   if (!ticking) {

//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
     
//     ticking = true;

//   }
  
// });

const Studio = () => (
  <div>
    <div className="bannerAndNav">
      <div className="banner"></div>
    </div>
    <div className="backColor">
      <div className="container">
      <nav>
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
      {/* <div id="logo"></div> */}
      <Switch>
        <Route exact path="/studio" component={AboutUs} />
        <Route exact path="/studio/gallery" component={StudioGallery} />
        <Route exact path="/studio/offer" component={StudioOffer} />
        <Route exact path="/kindergarten" component={Kindergarten} />
        <Route exact path="/studio/contact" component={Contact} />
      </Switch>
      </div>
    </div>
  </div>


);

export default Studio;


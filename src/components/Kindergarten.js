import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import Studio from './Studio'
import KindergartenOffer from './KindergartenOffer'
import KindergartenGallery from './KindergartenGallery'
import Contact from './Contact'
import AboutUs from './AboutUs';

const Kindergarten = () => (
  <div className="container">
    <nav>
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
          <Link to="/studio"> Fotogtafia studyjna </Link>
        </li>
        <li>
          <Link to="kindergarten/contact"> Kontakt </Link>
        </li>
      </ul>
    </nav>
    <div id="logo"></div>
    <Switch>
      <Route exact path="/kindergarten" component={AboutUs} />
      <Route exact path="/kindergarten/offer" component={KindergartenOffer} />
      <Route exact path="/kindergarten/gallery" component={KindergartenGallery} />
      <Route exact path="/studio" component={Studio} />
      <Route exact path="/kindergarten/contact" component={Contact} />
    </Switch>
  </div>
);

export default Kindergarten;


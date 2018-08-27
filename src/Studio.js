import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import StudioOffer from './StudioOffer'
import StudioGallery from './StudioGallery'
import Kindergarten from './Kindergarten'
import Contact from './Contact'
import AboutUs from './AboutUs'

const MainMenu = () => {
  return (
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
          <Link to="/studio/kindergarten"> Przedszkole </Link>
        </li>
        <li>
          <Link to="/contact"> Kontakt </Link>
        </li>
      </ul>
    </nav>
  );
};

class Studio extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <MainMenu />
          <Route exact path="/studio" component={AboutUs} />
          <Route exact path="/studio/gallery" component={StudioGallery} />
          <Route exact path="/studio/offer" component={StudioOffer} />
          <Route exact path="/studio/kindergarten" component={Kindergarten} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default Studio;


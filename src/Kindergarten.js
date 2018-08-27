import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Studio from './Studio'
import KindergartenOffer from './KindergartenOffer'
import KindergartenGallery from './KindergartenGallery'
import Contact from './Contact'
import AboutUs from './AboutUs';


const MainMenu = () => {
  return (
    <div>
      <Link to="/kindergarten">
        <button>Studio</button>
      </Link>
      <Link to="/kindergarten/offer">
        <button>Oferta</button>
      </Link>
      <Link to="/kindergarten/gallery">
        <button>Galeria</button>
      </Link>
      <Link to="/kindergarten/studio">
        <button>Fotogtafia studyjna</button>
      </Link>
      <Link to="/contact">
        <button>Kontakt</button>
      </Link>
    </div>
  );
};

class Kindergarten extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MainMenu />
          <Route exact path="/kindergarten" component={AboutUs} />
          <Route exact path="/kindergarten/offer" component={KindergartenOffer} />
          <Route exact path="/kindergarten/gallery" component={KindergartenGallery} />
          <Route exact path="/kindergarten/studio" component={Studio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default Kindergarten;


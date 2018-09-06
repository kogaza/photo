import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';
import '../App.css';
import StudioOffer from './StudioOffer'
import StudioGallery from './StudioGallery'
import StudioClient from './StudioClient'
import Kindergarten from './Kindergarten'
import Contact from './Contact'
import AboutUsStudio from './AboutUsStudio'
import { menuUp, showElement, hideElement, startScrolling, stopScrolling } from './functions'

class Studio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: true
    }
  }

  componentDidMount() {
    startScrolling();
  }
  componentWillUnmount() {
    stopScrolling();
  }

  mobileMenu = (arg) => {
    let hamburger = this.state.hamburger;
    console.log('arg',arg);
    if(arg === 'studio') menuUp("about-us-studio");
    this.setState({
      hamburger: !hamburger
    })
  }

  render() {
    let burger;
    if (this.state.hamburger === true) {
      burger = <div className="hamburger-container" onClick={() => this.mobileMenu()}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
    } else if(this.state.hamburger === false) {
      burger = <div><nav className="nav-mobile">
        <ul>
          <li onClick={() => this.mobileMenu('studio')}>
            <Link to="/studio"> Studio </Link>
          </li>
          <li onClick={() => this.mobileMenu()}>
            <Link to="/studio/offer"> Oferta </Link>
          </li>
          <li onClick={() => this.mobileMenu()}>
            <Link to="/studio/gallery"> Galeria </Link>
          </li>
          <li onClick={() => this.mobileMenu()}>
            <Link to="/studio/client"> Panel klienta </Link>
          </li>
          <li onClick={() => this.mobileMenu()}>
            <Link to="/studio/contact"> Kontakt </Link>
          </li>
        </ul>
      </nav>
        <div className="show-burger" onClick={() => this.mobileMenu()}></div>
        </div>
    }
    return (
      <div>
        {burger}
        <div className="belt-logo-burger">
        <Link to="/"><div id="logo-portrait"></div></Link>
        </div>
        <div id="banner-studio" className="banner-container">
          <div className="banner banner-woman"></div>
        </div>
        <div className="belt-nav">
          <div className="container">
            <nav>
              <Link to="/"><div id="logo"></div></Link>
              <ul>
                <li onClick={() => menuUp("about-us-studio")}>
                  <Link
                    to="/studio"
                    activeClassName="active"
                  > Studio </Link>
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
                  <Link to="/studio/contact"> Kontakt </Link>
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

    )
  }
}
export default Studio;


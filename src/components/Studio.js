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
import FullScreenPhoto from './FullScreenPhoto'

class Studio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: true,
      fullScreenPhoto: false,
      fullPhoto: 'studio04.jpg',
      photos: [],
      left: false
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
    if (arg === 'studio') menuUp("about-us-studio");
    this.setState({
      hamburger: !hamburger
    })
  }
  showPhoto = (fullPhoto, photos) => {
    this.setState({
      fullScreenPhoto: true,
      fullPhoto,
      photos
    })
  }
  hidePhoto = () => {
    this.setState({
      fullScreenPhoto: false
    })
  }

  prevPhoto = () => {
    let actualPhoto = this.state.fullPhoto;
    let allPhotos = this.state.photos;
    let actualId = allPhotos.indexOf(actualPhoto);
    let newPhoto = 
    actualId > 0 ? allPhotos[actualId-1] : allPhotos[allPhotos.length-1]
    this.setState({
      fullPhoto: newPhoto,
    })
  }
  nextPhoto = () => {
    let actualPhoto = this.state.fullPhoto;
    let allPhotos = this.state.photos;
    let actualId = allPhotos.indexOf(actualPhoto);
    let newPhoto = 
    actualId < allPhotos.length-1 ? allPhotos[actualId+1] : allPhotos[0]
    this.setState({
      fullPhoto: newPhoto,
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
    } else if (this.state.hamburger === false) {
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
          {/* <li onClick={() => this.mobileMenu()}>
            <Link to="/studio/client"> Panel klienta </Link>
          </li> */}
          <li onClick={() => this.mobileMenu()}>
            <Link to="/studio/contact"> Kontakt </Link>
          </li>
        </ul>
      </nav>
        <div className="show-burger" onClick={() => this.mobileMenu()}></div>
      </div>
    }
    let fullPhoto =
      this.state.fullScreenPhoto
        ?
        <FullScreenPhoto 
        fullPhoto={this.state.fullPhoto}
        hidePhoto={() => this.hidePhoto()}
        prevPhoto={() => this.prevPhoto()}
        nextPhoto={() => this.nextPhoto()}
        />
        :
        null;

    return (
      <div>
        {fullPhoto}
        {burger}
        <div className="belt-logo-burger">
          <Link to="/"><div id="logo-portrait"></div></Link>
          {/* <Link to="/photo/"><div id="logo-portrait"></div></Link> */}
        </div>
        <div id="banner-studio" className="banner-container">
          <div className="banner banner-woman"></div>
        </div>
        <div className="belt-nav">
          <div className="container">
            <nav>
              <Link to="/"><div id="logo"></div></Link>
              {/* <Link to="/photo/"><div id="logo"></div></Link> */}
              <ul>
                <li onClick={() => menuUp("about-us-studio")}>
                  <Link
                    to="/studio"
                    activeClassName="active"
                  >
                    Studio
                  </Link>
                </li>
                <li >
                  <Link
                    to="/studio/offer"
                    activeClassName="active"
                  >
                    Oferta
                  </Link>
                </li>
                <li >
                  <Link
                    to="/studio/gallery"
                    activeClassName="active"
                  >
                    Galeria
                  </Link>
                </li>
                {/* <li >
                  <Link
                    to="/studio/client"
                    activeClassName="active"
                  >
                    Panel klienta
                  </Link>
                </li> */}
                <li >
                  <Link
                    to="/studio/contact"
                    activeClassName="active"
                  >
                    Kontakt
                  </Link>
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
            <Route exact path="/studio/gallery" component={(props) => 
              (<StudioGallery 
                fullPhoto={this.state.fullPhoto} 
                showPhoto={(photo,all) => this.showPhoto(photo,all)}
                {...props}/>)} />
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


import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../App.css';
import KindergartenOffer from './KindergartenOffer'
import KindergartenGallery from './KindergartenGallery'
import Contact from './Contact'
import AboutUsKindergarten from './AboutUsKindergarten';
import { menuUp, showElement, hideElement, startScrolling, stopScrolling } from './functions'
import FullScreenPhoto from './FullScreenPhoto'

class Kindergarten extends React.Component {
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
    if (arg === 'kindergarten') menuUp("about-us-kindergarten");
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
          <li onClick={() => this.mobileMenu('kindergarten')}>
            <Link to="/kindergarten"> O nas </Link>
          </li>
          <li onClick={() => this.mobileMenu()}>
            <Link to="/kindergarten/offer"> Oferta </Link>
          </li>
          <li onClick={() => this.mobileMenu()}>
            <Link to="/kindergarten/gallery"> Galeria </Link>
          </li>
          <li onClick={() => this.mobileMenu()}>
            <Link to="/kindergarten/contact"> Kontakt </Link>
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
        <div id="banner-kindergarten" className="banner-container">
          <div className="banner banner-kindergarten"></div>
        </div>
        <div className="belt-nav">
          <div className="container">
            <nav>
              <Link to="/"><div id="logo"></div></Link>
              {/* <Link to="/photo/"><div id="logo"></div></Link> */}
              <ul>
                <li onClick={() => menuUp('about-us-kindergarten')}>
                  <Link to="/kindergarten"> O nas </Link>
                </li>
                <li>
                  <Link to="/kindergarten/offer"> Oferta </Link>
                </li>
                <li>
                  <Link to="/kindergarten/gallery"> Galeria </Link>
                </li>
                <li>
                  <Link to="/kindergarten/contact"> Kontakt </Link>
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
                onMouseOver={() => showElement()}
                onMouseOut={() => hideElement()}
              >
              </div>
            </Link>
          </div>
        </div>
        <div className="back-color">
          <Switch>
            <Route exact path="/kindergarten" component={AboutUsKindergarten} />
            <Route exact path="/kindergarten/offer" component={KindergartenOffer} />
            <Route exact path="/kindergarten/gallery" component={(props) =>
              (<KindergartenGallery
                fullPhoto={this.state.fullPhoto}
                showPhoto={(photo, all) => this.showPhoto(photo, all)}
                {...props} />)} />
            <Route exact path="/kindergarten/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Kindergarten;


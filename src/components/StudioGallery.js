import React from 'react';
import '../App.css';
import { menuUp } from './functions';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';

export default class StudioGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleStudio: 'Nasze studio',
      photosStudio: [
        'studio01.jpg', 'studio02.jpg', 'studio03.jpg',
        'studio04.jpg', 'studio05.jpg', 'studio06.jpg',
        'studio07.jpg', 'studio08.jpg', 'studio09.jpg',
        'studio10.jpg', 'studio11.jpg', 'studio12.jpg'
      ],
      titleOther: 'Nasze zdjęcia',
      photosOther: [
        'other01.jpg', 'other02.jpg', 'other03.jpg',
        'other04.jpg', 'other05.jpg', 'other06.jpg',
        'other07.jpg', 'other08.jpg', 'other09.jpg'
      ],
      titleSesion: 'Nasze sesje',
      photosSesion: [
        'session01.jpg', 'session02.jpg', 'session03.jpg',
        'session04.jpg', 'session05.jpg', 'session06.jpg',
        'session07.jpg'
      ],

    }
  }

  componentDidMount() {
    menuUp("about-us-studio-gallery");
  }

  render() {
    const {
      photosStudio, 
      titleStudio, 
      photosOther, 
      titleOther, 
      photosSesion, 
      titleSesion
    } = this.state;
    return (
      <div id='about-us-studio-gallery'>
      <Gallery1 photos={photosStudio} title={titleStudio} />
      <Gallery2 photos={photosOther} title={titleOther} />
      <Gallery1 photos={photosSesion} title={titleSesion} />

        <div className='panorama'></div>
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    )
  }
}

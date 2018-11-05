import React from 'react';
import '../App.css';
import { menuUp } from './functions'
import GalleryVertical from './GalleryVertical';
import GalleryHorizontal from './GalleryHorizontal';
import GalleryMixed from './GalleryMixed';

export default class KindergartenGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleAutumn: 'Sesje jesienne',
      photosAutumn: [
        'jesien/01.jpg', 'jesien/02.jpg', 'jesien/03.jpg',
        'jesien/04.jpg', 'jesien/03.jpg', 'jesien/06.jpg',
        'jesien/07.jpg', 'jesien/08.jpg', 'jesien/09.jpg',
        'jesien/10.jpg', 'jesien/11.jpg', 'jesien/12.jpg',
        'jesien/13.jpg', 'jesien/14.jpg', 'jesien/15.jpg',
        'jesien/16.jpg', 'jesien/17.jpg', 'jesien/18.jpg',
        'jesien/19.jpg', 'jesien/20.jpg', 'jesien/21.jpg'
      ],
      titleSpring: 'Sesje wiosenne',
      photosSpring: [
        'wiosna/01.jpg', 'wiosna/02.jpg', 'wiosna/03.jpg',
        'wiosna/09.jpg', 'wiosna/05.jpg', 'wiosna/06.jpg', 
        'wiosna/08.jpg', 'wiosna/11.jpg',
        'wiosna/12.jpg', 'wiosna/13.jpg', 'wiosna/15.jpg',
        'wiosna/16.jpg', 'wiosna/17.jpg', 'wiosna/14.jpg'
      ],
    }
  }

  componentDidMount() {
    menuUp("about-us-kindergarten-gallery");
  }

  render() {
    const { fullPhoto } = this.props;
    const {
      titleAutumn,
      photosAutumn,
      titleSpring,
      photosSpring
    } = this.state;
    return (
      <div id='about-us-kindergarten-gallery'>
        <GalleryVertical
          photos={photosAutumn}
          title={titleAutumn}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
        <div className='line'></div>
        <GalleryMixed
          photos={photosSpring}
          title={titleSpring}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
      </div>
    )
  }
}


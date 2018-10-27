import React from 'react';
import '../App.css';
import { menuUp } from './functions'
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';

export default class KindergartenGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleKindergarten: 'Nasze sesje przedszkolne',
      photosKindergarten: [
        'kindergarten01.jpg', 'kindergarten02.jpg', 'kindergarten03.jpg',
        'kindergarten04.jpg', 'kindergarten03.jpg', 'kindergarten06.jpg'
      ],
      titleKids: 'Zdjęcia dzieci',
      photosKids: [
        'kids01.jpg', 'kids02.jpg', 'kids03.jpg',
        'kids04.jpg', 'kids05.jpg'
      ],
    }
  }

  componentDidMount() {
    menuUp("about-us-kindergarten-gallery");
  }

  render() {
    const { fullPhoto } = this.props;
    const {
      titleKindergarten,
      photosKindergarten,
      titleKids,
      photosKids
    } = this.state;
    return (
      <div id='about-us-kindergarten-gallery'>
        <Gallery1
          photos={photosKindergarten}
          title={titleKindergarten}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
        <div className='line'></div>
        <Gallery2
          photos={photosKids}
          title={titleKids}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
      </div>
    )
  }
}


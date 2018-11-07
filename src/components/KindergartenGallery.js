import React from 'react';
import '../App.css';
import { menuUp } from './functions'
import GalleryVertical from './GalleryVertical';
import GalleryHorizontal from './GalleryHorizontal';
import GalleryMixed from './GalleryMixed';
import gallery from './json/kindergartenPhotos.json'

export default class KindergartenGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleAutumn: '',
      photosAutumn: [],
      titleSpring: '',
      photosSpring: [],
      titleWinter: '',
      photosWinter: [],
    }
  }
  componentWillMount() {
    this.setState({
      titleAutumn: gallery.autumn.title,
      photosAutumn: gallery.autumn.photos,
      titleSpring: gallery.spring.title,
      photosSpring: gallery.spring.photos,
      titleWinter: gallery.winter.title,
      photosWinter: gallery.winter.photos
    })
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
      photosSpring,
      titleWinter,
      photosWinter
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
        <div className='line'></div>
        <GalleryVertical
          photos={photosWinter}
          title={titleWinter}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
      </div>
    )
  }
}


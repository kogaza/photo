import React from 'react';
import '../App.css';
import { menuUp } from './functions';
import GalleryVertical from './GalleryVertical';
import GalleryHorizontal from './GalleryHorizontal';
import gallery from './json/studioPhotos.json'


export default class StudioGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleStudio: '',
      photosStudio: [],
      titleOther: '',
      photosOther: [],
      titleSesion: '',
      photosSesion: [],
    }
  }
  componentWillMount() {
    this.setState({
      titleStudio: gallery.studio.title,
      photosStudio: gallery.studio.photos,
      titleOther: gallery.other.title,
      photosOther: gallery.other.photos,
      titleSesion: gallery.sesion.title,
      photosSesion: gallery.sesion.photos
    })
  }
  componentDidMount() {
    menuUp("about-us-studio-gallery");
  }
  render() {
    const { fullPhoto } = this.props;
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
        <GalleryVertical
          photos={photosStudio}
          title={titleStudio}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
        <div className='line'></div>
        <GalleryHorizontal
          photos={photosOther}
          title={titleOther}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
        <div className='line'></div>
        <GalleryVertical
          photos={photosSesion}
          title={titleSesion}
          fullPhoto={fullPhoto}
          showPhoto={(photo, all) => this.props.showPhoto(photo, all)}
        />
      </div>
    )
  }
}

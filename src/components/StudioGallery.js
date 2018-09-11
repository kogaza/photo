import React from 'react';
import '../App.css';
import { menuUp } from './functions'

export default class StudioGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      miniLeft: ['studio01.jpg', 'studio02.jpg', 'studio03.jpg'],
      bigPhoto: 'studio01.jpg',
      miniRight: ['studio04.jpg', 'studio05.jpg', 'studio06.jpg']
    }
  }

  componentDidMount() {
    menuUp("about-us-studio-gallery");
  }

  changeBigPhoto = (picture) => {
    this.setState({
      bigPhoto: picture
    })
  }

  prevNextPhoto = (direction) => {
    const { miniLeft, bigPhoto, miniRight } = this.state;
    const actualPhoto = bigPhoto;
    const indexLeft = miniLeft.indexOf(actualPhoto);
    const indexRight = miniRight.indexOf(actualPhoto);
    let newPhoto = '';
    switch (direction) {
      case 'prev':
        if (indexLeft > 0) {
          newPhoto = miniLeft[indexLeft - 1];
        } else if (indexLeft === 0) {
          newPhoto = miniRight[miniRight.length - 1];
        }
        if (indexRight > 0) {
          newPhoto = miniRight[indexRight - 1];
        } else if (indexRight === 0) {
          newPhoto = miniLeft[miniLeft.length - 1];
        }
        break;
      case 'next':
        if (indexLeft >= 0 && indexLeft < miniLeft.length - 1) {
          newPhoto = miniLeft[indexLeft + 1];
        } else if (indexLeft === miniLeft.length - 1) {
          newPhoto = miniRight[0];
        }
        if (indexRight >= 0 && indexRight < miniRight.length - 1) {
          newPhoto = miniRight[indexRight + 1];
        } else if (indexRight === miniRight.length - 1) {
          newPhoto = miniLeft[0];
        }
        break;
    }
    this.setState({
      bigPhoto: newPhoto
    })
  }

  render() {
    const { miniLeft, bigPhoto, miniRight } = this.state;
    const miniLeftImg = miniLeft.map((p, i) => {
      let dataId = p.substring(8, 6);
      let altText = p.substring(0, 8);
      return (
        <div className="mini-img" data-id={dataId} key={i}>
          <img onClick={() => this.changeBigPhoto(p)}
            src={`/gallery/${p}`} alt={altText}
          ></img>
        </div>
      )
    })
    let altBigText = bigPhoto.substring(0, 8);
    const bigPhotoImg =
      <img id='big-photo'
        src={`/gallery/${bigPhoto}`} alt={altBigText}
      ></img>

    const miniRightImg = miniRight.map((p, i) => {
      let dataId = p.substring(8, 6);
      let altText = p.substring(0, 8);
      return (
        <div className="mini-img" data-id={dataId} key={i}>
          <img onClick={() => this.changeBigPhoto(p)}
            src={`/gallery/${p}`} alt={altText}
          ></img>
        </div>
      )
    })
    return (
      <div id='about-us-studio-gallery'>
        <div className='container'>
          <h1 className='title'> Nasze studio </h1>
        </div>
        <div className='photo-box-gallery'>
          <div className='photo-box-mini'>
            {miniLeftImg}
          </div>
          <div className='photo-box-big'>
            <div className='back icon-photo'>
              <i className="fas fa-angle-double-left" onClick={() => this.prevNextPhoto('prev')}></i>
            </div>
            {bigPhotoImg}
            <div className='next icon-photo'>
              <i className="fas fa-angle-double-right" onClick={() => this.prevNextPhoto('next')}></i>
            </div>
          </div>
          <div className="photo-box-mini">
            {miniRightImg}
          </div>
        </div>

        <div className='panorama'></div>
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    )
  }
}

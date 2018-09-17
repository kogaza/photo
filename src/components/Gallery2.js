import React from 'react';
import '../App.css';

export default class Gallery2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      visiblePhotos: [],
      bigGallery: false,
      bigPhotoId: ''
    }
  }

  componentDidMount() {
    const { photos, title } = this.props;
    const bigGallery = window.innerWidth > 1000 ? false : true;
    this.setState({
      title,
      photos,
      bigGallery,
      bigPhotoId: 0
    });
    this.interval = setInterval(
      () => {
        photos.push(photos.splice(0, 1)[0]);
        return (
          this.setState({
            photos
          })
        )
      }, 20000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showBigPhoto = (id) => {
    this.setState({
      bigGallery: true,
      bigPhotoId: id
    });
  }

  hideBigPhoto = () => {
    this.setState({
      bigGallery: false
    })
  }

  prevNextPhoto = (direction) => {
    const { photos } = this.state;
    switch (direction) {
      case 'prev':
        photos.push(photos.reverse().splice(0, 1)[0]);
        photos.reverse();
        break;
      default:
        photos.push(photos.splice(0, 1)[0]);
        break;
    }
    this.setState({
      photos
    })
  }

  render() {
    const { title, photos, bigGallery, bigPhotoId } = this.state;
    const rightNext = window.innerWidth - 100;
    const rightStyle = {
      left: rightNext + 'px'
    };
    const numbersOfPhotos = 
    window.innerWidth > 1000 ? 4 : 2;
    const photoList = photos.filter((v, i) => i < numbersOfPhotos).map((p, i) => {
      let dataId = p.substring(8, 6);
      let altText = p.substring(0, 8);
      return (
        <div className="photo-horizontal" data-id={dataId} key={i}>
          <img
            onClick={() => this.props.showPhoto(p, photos)}
            src={`/gallery/${p}`} alt={altText}
          ></img>
        </div>
      )
    })
    const showGallery =
    window.innerWidth > 1000
    ?
      <div className='photo-box-gallery-horizontal'>
        <div className='photo-box-row'>
          {photoList}
        </div>
        <div
          className='back'
          onClick={() => this.prevNextPhoto('prev')}>
          <i className="fas fa-angle-double-left" ></i>
        </div>
        <div
          className='next'
          style={rightStyle}
          onClick={() => this.prevNextPhoto('next')
          }>
          <i className="fas fa-angle-double-right" ></i>
        </div>
      </div>
      :
      <div className='photo-box-gallery-horizontal'>
        <div className='photo-box-row'>
          {photoList}
        </div>
      </div>

    return (
      <div >
        <div className='container'>
          <h1 className='title'> {title} </h1>
        </div>
        {showGallery}
      </div>
    )
  }
}

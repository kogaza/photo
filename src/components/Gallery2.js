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
    const rightBigNext = window.innerWidth > 1000 ? 900 : window.innerWidth - 100;
    const rightBigStyle = 
    {
      left: rightBigNext + 'px',
    };

    const photoList = photos.filter((v, i) => i < 4).map((p, i) => {
      let dataId = p.substring(8, 6);
      let altText = p.substring(0, 8);
      return (
        <div className="photo-horizontal" data-id={dataId} key={i}>
          <img
            onClick={() => this.showBigPhoto(i)}
            src={`/gallery/${p}`} alt={altText}
          ></img>
        </div>
      )
    })

    const exitBut =
      <div className='exit-button-container'>
        <button
          className='exit-button'
          onClick={() => this.hideBigPhoto()}>zamknij</button>
      </div>;

    let bigPhoto = photos.length > 0 && bigPhotoId !== '' ? photos[bigPhotoId] : '';
    let dataIdBig = bigPhoto.substring(8, 6);
    let altTextBig = bigPhoto.substring(0, 8);

    const showGallery =
      bigGallery ?
        <div className='big-photo-container'>
          <div 
          className='back icon-photo-big' 
          onClick={() => this.prevNextPhoto('prev')}>
            <i className="fas fa-angle-double-left" ></i>
          </div>
          <div className="big-photo-gallery" data-id={dataIdBig}>
            <img
              src={`/gallery/${bigPhoto}`} alt={altTextBig}
            ></img>
            {exitBut}
          </div>
          <div
            className='next-big icon-photo-big' 
            style={rightBigStyle}
            onClick={() => this.prevNextPhoto('next')}>
            <i className="fas fa-angle-double-right" ></i>
          </div>
        </div>
        : photoList;


    return (
      <div >
        <div className='container'>
          <h1 className='title'> {title} </h1>
        </div>
        <div className='photo-box-gallery-horizontal'>
          <div className='photo-box-row'>
            {showGallery}
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
      </div>
    )
  }
}

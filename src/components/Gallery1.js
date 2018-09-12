import React from 'react';
import '../App.css';

export default class Gallery1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      miniLeft: [],
      bigPhoto: '',
      miniRight: []
    }
  }

  componentDidMount() {
    const { photos, title} = this.props;
    const left = [];
    const right = [];
    photos.filter((p, i) => i < photos.length / 2).map((s) => left.push(s));
    photos.filter((p, i) => (i >= photos.length / 2 && i < photos.length)).map((s) => right.push(s));
    const miniLeft = [];
    const miniRight = [];
    left.filter((p, i) => (i >= 0 && i < 3)).map((s) => miniLeft.push(s));
    right.filter((p, i) => (i >= 0 && i < 3)).map((s) => miniRight.push(s));
    this.setState({
      title,
      photos,
      miniLeft,
      bigPhoto: photos[0],
      miniRight
    });
    this.interval = setInterval(
      () => {
        left.push(left.splice(0,1)[0]);
        right.push(right.splice(0,1)[0]);
        const miniLeft = [];
        const miniRight = [];
        left.filter((p, i) => (i >= 0 && i < 3)).map((s) => miniLeft.push(s));
        right.filter((p, i) => (i >= 0 && i < 3)).map((s) => miniRight.push(s));
        return (
          this.setState({
            miniLeft,
            miniRight
          })
        )
      }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeBigPhoto = (picture) => {
    this.setState({
      bigPhoto: picture
    })
  }

  prevNextPhoto = (direction) => {
    const { photos, bigPhoto } = this.state;
    const actualPhoto = bigPhoto;
    const index = photos.indexOf(actualPhoto);
    let newPhoto = '';
    switch (direction) {
      case 'prev':
        if (index === 0) {
          newPhoto = photos[photos.length - 1];
        } else if (index > 0) {
          newPhoto = photos[index - 1];
        }
        break;
      default:
        if (index === photos.length - 1) {
          newPhoto = photos[0];
        } else if (index >= 0) {
          newPhoto = photos[index + 1];
        }
        break;
    }
    this.setState({
      bigPhoto: newPhoto
    })
  }

  render() {
    const { title, miniLeft, bigPhoto, miniRight } = this.state;
    const miniLeftImg = miniLeft.map((p, i) => {
      let dataId = p.substring(p.indexOf('.'), p.indexOf('.')-2);
      let altText = p.substring(0, p.indexOf('.'));
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
      <div >
        <div className='container'>
          <h1 className='title'> {title} </h1>
        </div>
        <div className='photo-box-gallery'>
          <div className='photo-box-mini'>
            {miniLeftImg}
          </div>
          <div className='photo-box-big'>
            <div className='back icon-photo' onClick={() => this.prevNextPhoto('prev')}>
              <i className="fas fa-angle-double-left" ></i>
            </div>
            {bigPhotoImg}
            <div className='next icon-photo' onClick={() => this.prevNextPhoto('next')}>
              <i className="fas fa-angle-double-right" ></i>
            </div>
          </div>
          <div className="photo-box-mini">
            {miniRightImg}
          </div>
        </div>
      </div>
    )
  }
}

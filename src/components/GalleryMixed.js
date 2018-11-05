import React from 'react';
import '../App.css';
import Swipeable from 'react-swipeable'


export default class GalleryMixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      visiblePhotos: [],
      firstHorizontal: true
    }
  }

  componentDidMount() {
    const { photos, title } = this.props;
    this.setState({
      title,
      photos
    });
    this.interval = setInterval(
      () => {
        const { firstHorizontal } = this.state;
        photos.push(photos.splice(0, 1)[0]);
        return (
          this.setState({
            photos,
            firstHorizontal: !firstHorizontal 
          })
        )
      }, 20000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  swipingLeft = (e, absX) => {
    const moveLeft = this.state.left;
    if (absX > 0 && !moveLeft) {
      this.setState({
        left: true
      })
      this.prevNextPhotoMobile('prev');
    }
  }
  swipingRight = (e, absX) => {
    const moveRight = this.state.right;
    if (absX > 0 && !moveRight) {
      this.setState({
        right: true
      })
      this.prevNextPhotoMobile('next');
    }
  }
  swiped = (e, deltaX, deltaY, isFlick, velocity) => {
    if (!isFlick || isFlick) {
      this.setState({
        left: false,
        right: false
      })
    }
  }

  prevNextPhotoMobile = (direction) => {
    const { photos, firstHorizontal } = this.state;
    switch (direction) {
      case 'prev':
        photos.push(photos.splice(0, 1)[0]);
        break;
      default:
        let photosReverse = photos.reverse();
        let moveElem = photosReverse.splice(0, 1)[0];
        photosReverse.push(moveElem);
        break;
    }
    this.setState({
      firstHorizontal: !firstHorizontal 
    })
  }

  prevNextPhoto = (direction) => {
    const { photos, firstHorizontal } = this.state;
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
      photos,
      firstHorizontal: !firstHorizontal 
    })
  }

  render() {
    const { title, photos, firstHorizontal } = this.state;
    let first = firstHorizontal;
    const rightNext = window.innerWidth - 100;
    const rightStyle = {
      left: rightNext + 'px'
    };
    const numbersOfPhotos =
      window.innerWidth > 1000 ? 4 : 2;
    const photoList = photos.filter((v, i) => i < numbersOfPhotos).map((p, i) => {
      let dataId = p.substring(8, 6);
      let altText = p.substring(0, 8);
      let mixedClass = first ?
        "photo-mixed-horizontal photo-horizontal"
        :
        "photo-mixed-vertical photo-horizontal";
      first = !first;
      return (
        <div className={mixedClass} data-id={dataId} key={i}>
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
        <Swipeable
          onSwipingLeft={this.swipingLeft}
          onSwipingRight={this.swipingRight}
          onSwiped={this.swiped}
        >
          {showGallery}
        </Swipeable>
      </div>
    )
  }
}

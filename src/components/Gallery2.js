import React from 'react';
import '../App.css';

export default class Gallery2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      photos: [],
      visiblePhotos: []
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
        photos.push(photos.splice(0, 1)[0]);
        return (
          this.setState({
            photos
          })
        )
      }, 10000
    );
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
    const { title, photos } = this.state;
    const leftNext = window.innerWidth - 100;
    const leftStyle = {
      left: leftNext + 'px'
    }
    const photoList = photos.filter((v, i) => i < 4).map((p, i) => {
      let dataId = p.substring(8, 6);
      let altText = p.substring(0, 8);
      return (
        <div className="photo-horizontal" data-id={dataId} key={i}>
          <img
            // onClick={() => this.changeBigPhoto(p)}
            src={`/gallery/${p}`} alt={altText}
          ></img>
        </div>
      )
    })
    let fullPicture =
    <div className='show-big-photo'>
      <img
        src={`/gallery/studio03.jpg`} alt={'studio03'}
      ></img>
    </div>
    return (
      <div >
        {fullPicture}

        <div className='container'>
          <h1 className='title'> {title} </h1>
        </div>
        <div className='photo-box-gallery-horizontal'>
          {photoList}
          <div className='back' onClick={() => this.prevNextPhoto('prev')}>
            <i className="fas fa-angle-double-left" ></i>
          </div>
          <div
            className='next'
            style={leftStyle}
            onClick={() => this.prevNextPhoto('next')
            }>
            <i className="fas fa-angle-double-right" ></i>
          </div>
        </div>
      </div>
    )
  }
}

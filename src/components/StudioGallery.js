import React from 'react';
import '../App.css';
import { menuUp } from './functions'

export default class StudioGallery extends React.Component {

  componentDidMount() {
    menuUp("about-us-studio-gallery");
    this.showImg();
  }

  showImg = () => {
    const bigPhoto = document.getElementById('big-photo');
    const miniPhotos = document.querySelectorAll('.mini-img');
    for(let i = 0; i < miniPhotos.length; i++) {
      miniPhotos[i].addEventListener('click', function(event) {
        if(event.target.tagName === 'IMG') {
          bigPhoto.src = event.target.src;
        }
      })
    }
  }

  render() {
    return (
      <div id='about-us-studio-gallery'>
        <div className='container'>
          <h1 className='title'> Nasze studio </h1>
        </div>
          <div className='photo-box-gallery'>
            <div className='photo-box-mini'>
              <div className="mini-img">
                <img
                  src='/gallery/studio01.jpg' alt='studio01'
                ></img>
              </div>
              <div className="mini-img">
                <img
                  src='/gallery/studio02.jpg' alt='studio02'
                ></img>
              </div>
              <div className="mini-img">
                <img
                  src='/gallery/studio03.jpg' alt='studio03'
                ></img>
              </div>

            </div>
            <div className='photo-box-big'>
              <img id='big-photo'
                src='/gallery/studio01.jpg' alt='studio01'
              ></img>
            </div>
            <div className="photo-box-mini">
              <div className='mini-img'>
                <img
                  src='/gallery/studio04.jpg' alt='studio04'
                >
                </img>
              </div>
              <div className='mini-img'>
                <img
                  src='/gallery/studio05.jpg' alt='studio05'
                >
                </img>
              </div>
              <div className='mini-img'>
                <img
                  src='/gallery/studio06.jpg' alt='studio06'
                >
                </img>
              </div>

            </div>
          </div>
        
        <div className='panorama'></div>
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    )
  }
}

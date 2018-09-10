import React from 'react';
import '../App.css';
import { menuUp } from './functions'

export default class StudioGallery extends React.Component {

  componentDidMount() {
    menuUp("about-us-studio-gallery");
  }

  render() {
    return (
      <div id='about-us-studio-gallery'>
        <div className='container'>
          <h1 className='title'> Zapraszamy do galerii naszych zdjęć </h1>
        </div>
        <div className='photo-gallery photo-kids'>
          <div className='photo-box-gallery'>
            <div className='photo-box-mini'>
              <img
                src='/gallery/studio01.jpg' alt='studio01'
              ></img>
              <img
                src='/gallery/studio02.jpg' alt='studio02'
              ></img>
              <img
                src='/gallery/studio03.jpg' alt='studio03'
              ></img>
        
            </div>
            <div className='photo-box-big'>
              <img
                src='/gallery/studio01.jpg' alt='studio01'
              ></img>
            </div>
            <div className='photo-box-mini'>
              <img
                src='/gallery/studio04.jpg' alt='studio04'
                >
              </img>
              <img
                src='/gallery/studio05.jpg' alt='studio04'
                >
              </img>
              <img
                src='/gallery/studio06.jpg' alt='studio04'
              >
              </img>
            </div>
          </div>
          {/* <div className='photo-box'>
        <div className='photos kids3'></div>
      </div>
      <div className='photo-box'>
        <div className='photos kids5'></div>
      </div> */}
        </div>
        <div className='container'>
          <p> Sesje zdjęciowe wykonywane w przedszkolach sprawiają nam dużo radości i satysfakcji.</p>
          <p> Praca z dziećmi to najwspanialsza przygoda, która może spotkać dorosłego człowieka.
            Każdy mały przedszkolak jest inny, do każdego trzeba podejść indywidualnie.
        Największa radość to uśmiech dziecka po drugiej stronie aparatu: rozluźniony, szczęśliwy, naturalny.</p>
          <p> Sesje zdjęciowe w przedszkolach wykonujemy już od 21 lat.<br />
            Działamy na terenie całego śląska. </p>
        </div>
        <div className='panorama'></div>
        <footer>Wszelkie prawa zastrzeżone</footer>
      </div>
    )
  }
}

import React from 'react';

const showImage = (photo) => {
  // let newWindow = document.createElement('div');
  // let showPhoto = document.createElement('div');
  // let exitButton = document.createElement('button');
  // let arg = photo;
  // showPhoto.classList.add(arg);
  // newWindow.classList.add('showMe');
  // let position
  // newWindow.appendChild(showPhoto);
  // exitButton.innerText = 'zamknij';
  // exitButton.classList.add('exitButton');
  // newWindow.appendChild(exitButton);
  // document.body.appendChild(newWindow);
  // exitButton.addEventListener('click', function () {
  //   newWindow.parentElement.removeChild(newWindow);
  // })
}

const AboutUsKindergarten = () => (
  <div id='about-us-kindergarten'>
    <div className='container'>
      <h1 className='title'> Fotografia przedszkolna </h1>
    </div>
    <div className='photo-gallery photo-kids'>
      <div className='photo-box'>
        <div className='photos kids2'>
        </div>
      </div>
      <div className='photo-box'>
        <div className='photos kids3'></div>
      </div>
      <div className='photo-box'>
        <div className='photos kids5'></div>
      </div>
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
);

export default AboutUsKindergarten;

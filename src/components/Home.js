import React from 'react';
import { Link } from 'react-router-dom';

const showText = (text) => {
  const showText = document.querySelector(text);
  if (text === '.text-kindergarten h1') {
    showText.style.color = '#db4d50';
  } else {
    showText.style.color = 'white';
  }
}
const hideText = (text) => {
  const showText = document.querySelector(text);
  if (text === '.text-kindergarten h1') {
    showText.style.cssText = '';
  } else {
    showText.style.cssText = '';
  }
}

const Home = () => (
  <div>
    <div className="h1-photo text-studio">
      <Link to="/studio">
        <span>'</span>
      </Link>
      <h1 >Fotografia <br /> studyjna</h1>
    </div>
    <div className="h1-photo text-kindergarten">
      <Link to="/kindergarten">
        <span>'</span>
      </Link>
      <h1 >Fotografia <br /> przedszkolna</h1>
    </div>
    <div className='page-option'>
      <div className='option'
        onMouseOver={() => showText('.text-studio h1')}
        onMouseOut={() => hideText('.text-studio h1')}
      >
        <Link to="/studio">
          <span>'</span>
        </Link>
      </div>
      <div className='option'
        onMouseOver={() => showText('.text-kindergarten h1')}
        onMouseOut={() => hideText('.text-kindergarten h1')}
      >
        <Link to="/kindergarten">
          <span>'</span>
        </Link>
      </div>
    </div>
    <div className="logo-container">
      <div id="romb"></div>
      <div id="logo-home"></div>
    </div>
  </div>
);


export default Home;

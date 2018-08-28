import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <div className='page-option'>
      <div className='option-text'>Fotografia <br /> studyjna</div>
      <div className='option-text'>Fotografia <br /> przedszkolna</div>
    </div>
    <div className='page-option'>

      <div className='option'>
        <Link to="/studio">
          <span>""</span>
        </Link>
      </div>
      <div className='option'>
        <Link to="/kindergarten">
          <span>""</span>
        </Link>
      </div>
    </div>
    <div id="romb"></div>
    <div id="logo-home"></div>
  </div>
);


export default Home;

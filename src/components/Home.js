import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <div className="h1-photo">
    <h1 >Fotografia <br /> studyjna</h1>

    </div>
    <div className="h1-photo">
    <h1 >Fotografia <br /> przedszkolna</h1>

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

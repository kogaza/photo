import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Studio from './Studio'
import Kindergarten from './Kindergarten'

// import Wedding from './Wedding'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHome: true
    }
  }
  hideHome = () => {
    this.setState({
      showHome: false
    })
  }
  render() {
    let showHome = !this.state.showHome ? null :
      <div>
        <div className='page-option'>
          <div className='option-text'>Fotografia <br /> studyjna</div>
          <div className='option-text'>Fotografia <br /> przedszkolna</div>
        </div>
        <div className='page-option'>

          <div className='option'>
            <Link to="/studio">
              <span onClick={() => this.hideHome()}>""</span>
            </Link>
          </div>
          <div className='option'>
            <Link to="/kindergarten">
              <span onClick={() => this.hideHome()}>""</span>
            </Link>
          </div>
        </div>
        <div id="romb"></div>
        <div id="logo-home"></div>
      </div>

    return (
      <Router>
        <div>
          {showHome}
          <div>
            <Route exact path="/kindergarten" component={Kindergarten} />
            <Route exact path="/studio" component={Studio} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

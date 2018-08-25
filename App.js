import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Studio from './Studio'
import Kids from './Kids'
import Intro from './Intro'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIntro: true,
      showStudio: false,
      showKids: false
    };
  }
  studio = () => {
    this.setState({
      showIntro: false,
      showStudio: true
    })
  }
  kids = () => {
    this.setState({
      showIntro: false,
      showKids: true
    })
  }
  render() {
    return (
      <div className="container">
        {this.state.showIntro ?
          <Intro
            state={this.state}
            studio={() => this.studio()}
            kids={() => this.kids()}
          /> :
          null
        }
        {this.state.showStudio ? <Studio /> : null}
        {this.state.showKids ? <Kids /> : null}
      </div >
    );
  }
}

export default App;






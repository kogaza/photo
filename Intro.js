import React from 'react';

class Intro extends React.Component {

  render() {
    console.log(this.props.state);
    return (
      <div>
        <div className='page-option'>
          <div className='option-text'>Fotografia <br /> studyjna</div>
          <div className='option-text'>Fotografia <br /> przedszkolna</div>
        </div>
        <div className='page-option'>
          <div className='option' onClick={() => this.props.studio()}></div>
          <div className='option' onClick={() => this.props.kids()}></div>
        </div>
        <div id="romb"></div>
        <div id="logo"></div> 
      </div>
    );
  }
}


export default Intro;

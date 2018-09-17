import React from 'react';
import '../App.css';
import Swipeable from 'react-swipeable'

export default class FullScreenPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      right: false
    }
  }
  swipingLeft = (e, absX) => {
    const moveLeft = this.state.left;
    if (absX > 0 && !moveLeft) {
      this.setState({
        left: true
      }, () => console.log('state L', this.state))
      this.props.backPhoto();
    }
  }
  swipingRight = (e, absX) => {
    const moveRight = this.state.right;
    if (absX > 0 && !moveRight) {
      this.setState({
        right: true
      }, () => console.log('state R', this.state))
      this.props.nextPhoto();
    }
  }
  swiped = (e, deltaX, deltaY, isFlick, velocity) => {
    console.log("You Swiped...", isFlick)
    if (!isFlick || isFlick) {
      this.setState({
        left: false,
        right: false
      }, () => console.log('state', this.state))
    }
  }
  render() {
    const { fullPhoto } = this.props;
    let altText = fullPhoto.substring(0, 8);
    const rightNext = window.innerWidth - 100;
    const rightStyle = {
      left: rightNext + 'px'
    };
    const bigPicture =
      window.innerWidth > 1000
        ?
        <div className='full-screen'>
          <img
            src={`/gallery/${fullPhoto}`} alt={altText}
          ></img>
          <div className='full-screen-exit'>
            <i className="fas fa-times" onClick={() => this.props.hidePhoto()}></i>
          </div>
          <div
            className='back-big'
            onClick={() => this.props.backPhoto()}>
            <i className="fas fa-angle-double-left" ></i>
          </div>
          <div
            className='next-big'
            onClick={() => this.props.nextPhoto()}>
            <i className="fas fa-angle-double-right" ></i>
          </div>
        </div>
        :
        <div className='full-screen'>
          <img
            src={`/gallery/${fullPhoto}`} alt={altText}
          ></img>
          <div className='full-screen-exit'>
            <i className="fas fa-times" onClick={() => this.props.hidePhoto()}></i>
          </div>
        </div>
    return (
      <Swipeable
        onSwipingLeft={this.swipingLeft}
        onSwipingRight={this.swipingRight}
        onSwiped={this.swiped}
      >
        {bigPicture}
      </Swipeable>
    )
  }
}

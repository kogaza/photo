import React from 'react';

class Studio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    console.log('Działa Studio - oooo')
    return (
      <div>Studio działa</div>
    );
  }
}


export default Studio;

// <Router>
{/* 


  {/* <h1>Form /Builder</h1> */}
{/* <nav>
    <ul>
      <li><Link to='/'> Create </Link></li>
      <li><Link to='preview'> Preview </Link></li>
      <li><Link to='/export'> Export </Link></li>
    </ul>
  </nav> */}
{/* <Route exact path='/' component={Studio} />
  <Route  path='/kids' component={Kids} /> */}
// </Router>
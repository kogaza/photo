import React from 'react';

export default class Welcome extends React.Component {

  componentDidMount() {
    console.log('działa Welcome');
  }

  render() {
    return <h1>Hello</h1>;
  }
}
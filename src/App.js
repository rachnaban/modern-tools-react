import React from 'react';
import {hot} from 'react-hot-loader';

class App extends React.Component {
  state = {count: 0};
  render() {
    return <h1>Hello Rachna - Loves The Modern Tool</h1>;
  }
}

export default hot(module)(App);

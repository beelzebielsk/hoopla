import React, { Component } from 'react';
import Header from './Header';
import Routes from './Routes';
import MyFooter from './MyFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Routes />
          <MyFooter/>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './Routes';
import MyFooter from './components/MyFooter';

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
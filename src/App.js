import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Form from './Components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Main from './Pages/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = "";
  }
  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}
export default App;

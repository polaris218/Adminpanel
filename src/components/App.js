import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

class App extends Component {
    
  render() { 
    return ( 
      <Navbar />
    );
  }
}
 
export default App;
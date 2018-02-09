import React, { Component } from 'react';
import router from './router';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          {router}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
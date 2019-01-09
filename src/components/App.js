import React, { Component } from 'react';
import Search from './Search';
import styled from 'styled-components'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import '../styles/App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Search width="600px" />
      </div>
    );
  }
}

export default App;

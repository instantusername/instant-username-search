import React, { Component } from 'react';
import Search from './Search';
import styled from 'styled-components'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import '../styles/App.css';
import Results from './Results';
import AwesomeDebouncePromise from 'awesome-debounce-promise';


window.apiUrl = 'http://localhost:8080/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sites: []
    }

  }

  componentDidMount = () => {
    fetch(window.apiUrl + 'services/getAll')
      .then(response => response.json())
        .then(responseJson => {
          this.setState({
            site: responseJson
          });
        })
        .catch(() => {
            console.log('error while fetching services list');
        });
  }

  search = (username) => {
    console.log(username);
  }

  debouncedSearch = AwesomeDebouncePromise(this.search, 1000);

  render() {
    return (
      <div>
        <Search width="600px" onSearch={this.debouncedSearch} />
        <Results />
      </div>
    );
  }
}

export default App;

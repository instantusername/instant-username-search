import React, { Component } from 'react';
import Search from './Search';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import '../styles/App.css';
import Results from './Results';
import AwesomeDebouncePromise from 'awesome-debounce-promise';


window.apiUrl = 'http://localhost:8080/';

// AbortController and signal to cancel fetch requests
var controller;
var signal;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [],
      results: []
    }

  }

  componentDidMount = () => {
    fetch(window.apiUrl + 'services/getAll')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          sites: responseJson
        });
      })
      .catch((e) => {
        console.log('error while fetching services list' + e.message);
      });
  }

  search = (username) => {
    controller = new AbortController();
    signal = controller.signal;

    for (let i = 0; i < this.state.sites.length; i++) {
      fetch(window.apiUrl + 'check' + this.state.sites[i].endpoint.replace('{username}', username), { signal })
        .then(response => response.json())
        .then(responseJson => {
          //console.log(responseJson);
          let newResults = [].concat(this.state.results);
          newResults.push(responseJson);
          this.setState({
            results: newResults
          });
        })
        .catch((e) => {
          console.log(e.message);
          // console.log(this.state.sites[i]);
        });
    }
  }

  debouncedSearch = AwesomeDebouncePromise(this.search, 800);

  inputChanged = (input) => {
    if (input !== '') {
      if (this.state.results.length > 0) {
        controller.abort();
        this.setState({
          results: []
        });
      }
      this.debouncedSearch(input);
    }

  }

  render() {
    return (
      <div className="main">
        <Search onSearch={this.inputChanged} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;

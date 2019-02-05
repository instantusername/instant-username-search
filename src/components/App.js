import React, { Component } from 'react';
import { debounce } from "debounce";
import Search from './Search';
import Results from './Results';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import '../styles/App.css';

window.apiUrl = 'http://localhost:8080/';
const checkEndpoint = window.apiUrl + 'check';

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
    // fetch all the services available to check
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
    // instantiniate a new controller for this cycle
    controller = new AbortController();
    signal = controller.signal;

    // loop through all sites and check the availability
    for (let i = 0; i < this.state.sites.length; i++) {
      const checkService = this.state.sites[i].endpoint;
      const checkUser = checkService.replace('{username}', username);

      fetch(checkEndpoint + checkUser, { signal })
        .then(response => response.json())
        .then(responseJson => {
          let newResults = [].concat(this.state.results);
          newResults.push(responseJson);
          this.setState({
            results: newResults
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }

  // debounce the search function
  debouncedSearch = debounce(this.search, 800);

  // search input changes
  inputChanged = (input) => {
    // if input is empty, do nothing
    if (input !== '') {
      // if this is not the first cycle, clean results in the state
      if (this.state.results.length > 0) {
        controller.abort();
        this.setState({
          results: []
        });
      }
      // invoke debounced search
      this.debouncedSearch(input);
    }
  }

  render() {
    return (
      <div className="container">
        <Search onSearch={this.inputChanged} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;

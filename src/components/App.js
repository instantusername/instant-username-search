import React, { Component } from 'react';
import Search from './Search';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import '../styles/App.css';
import Results from './Results';
import AwesomeDebouncePromise from 'awesome-debounce-promise';


window.apiUrl = 'http://localhost:8080/';

class App extends Component {
  constructor(props){
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
        .catch(() => {
            console.log('error while fetching services list');
        });
  }

  search = (username) => {
    console.log(username);
    
    for(let i=0 ; i < this.state.sites.length ; i++){

      // console.log(this.state.sites[i]);

      fetch(window.apiUrl + 'check' + this.state.sites[i].endpoint.replace('{username}', username))
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
            console.log(e);
            // console.log(this.state.sites[i]);
        });
    }


  }

  

  debouncedSearch = AwesomeDebouncePromise(this.search, 800);

  render() {
    return (
      <div className="main">
        <Search onSearch={this.debouncedSearch} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Resultcard from './ResultCard';
import '../styles/Results.css';

class Results extends Component {
  render() {
    let results = [];
    let loadingCount = 12;
    console.log(this.props.results);

    if (this.props.loading === true) {
      for (let i = 0; i < loadingCount; i++) {
        results.push(<Resultcard key={i} loading={true} />);
      }
    } else {
      results = this.props.results.map((res, i) => {
        // message: error message from server
        // if it exists, that means something went wrong on the server-side
        if (res.message != null) {
          return null;
        }
        return res.cardType !== 'ad' ? (
          <Resultcard key={i} result={res} />
        ) : (
          <Resultcard key={i} ad={true} />
        );
      });
      let i = 0;
      while (results.length < loadingCount) {
        results.push(<Resultcard key={results.length + i} loading={true} />);
      }
    }

    return <div className="results">{results}</div>;
  }
}

export default Results;

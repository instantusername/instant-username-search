import React, { Component } from 'react';
import Resultcard from './ResultCard';
import '../styles/Results.css';

class Results extends Component{

    render(){
        let results = this.props.results.map((res, i) => {
            // message: error message from server
            // if it exists, that means something went wrong on the server-side
            if(res.message != null){
                return null;
            }
            return (
                <Resultcard key={i} result={res}/>
            );
        });

        return(
            <div className="results">
                {results}
            </div>
        );
    }
}

export default Results;
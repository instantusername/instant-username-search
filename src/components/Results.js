import React, { Component } from 'react';
import Resultcard from './ResultCard';
import '../styles/Results.css';

class Results extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidUpdate(prevProps) {
        //console.log(this.props.results)
        if (this.props.results !== prevProps.results) {
            //console.log(this.props.results);
        }
      }

    render(){

        let results = this.props.results.map(res => {

            if(res.message != null){
                return null;
            }
            return (<div>
                
                {/* <p>{res.url + ": " + av} </p> */}
                <Resultcard result={res}/>
                
            </div>)
        });
        return(
            <div className="results">
            {results}
            </div>
        
        
        );
    }
}

export default Results;
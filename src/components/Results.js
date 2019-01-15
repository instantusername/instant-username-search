import React, { Component } from 'react';

class Results extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidUpdate(prevProps) {
        //console.log(this.props.results)
        if (this.props.results !== prevProps.results) {
            console.log(this.props.results);
        }
      }

    render(){

        let results = this.props.results.map(res => {
            let av = res.available ? "available" : "not available";
            return (<div>
                
                <p>{res.url + ": " + av} </p>
            </div>)
        });
        return(<p>{results}</p>);
    }
}

export default Results;
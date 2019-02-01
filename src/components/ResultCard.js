import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/ResultCard.css';

const { Meta } = Card;


class ResultCard extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    cardClicked = () => {

    }

    render(){

        return(
            <div className="card">
                <a href={this.props.result.url} target="_blank" rel="noopener noreferrer">
                
                
                <Card hoverable loading={false} onClick={()=>{console.log("asdasd")}}>
                    <Meta
                        title={this.props.result.service}
                        description={this.props.result.available ? "Available" : "Taken"}
                    />
                </Card>
                </a>
            </div>
        );
    }
}

export default ResultCard;
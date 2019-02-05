import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/ResultCard.css';

const { Meta } = Card;


class ResultCard extends Component{
    render(){
        let status = this.props.result.available ? "Available" : "Taken";
        return(
            <div className={"card " + status.toLowerCase()}>
                <a href={this.props.result.url} target="_blank" rel="noopener noreferrer">
                <Card hoverable loading={false}>
                    <Meta
                        title={this.props.result.service}
                        description={status}
                    />
                </Card>
                </a>
            </div>
        );
    }
}

export default ResultCard;
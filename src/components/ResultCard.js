import React, { Component } from 'react';
import { Card } from 'antd';
import '../styles/ResultCard.css';

const { Meta } = Card;


class ResultCard extends Component {
    render() {
        if (this.props.loading) {
            return (
                <div className={"loading card"}>
                    <Card hoverable loading={true}>
                    </Card>
                </div>
            );
        } else {
            let status = this.props.result.available ? "Available" : "Taken";
            return (
                <div className={"card " + status.toLowerCase()}>
                    <a href={this.props.result.url} target="_blank" rel="noopener noreferrer">
                        <Card hoverable>
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
}

export default ResultCard;
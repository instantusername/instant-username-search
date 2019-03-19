import React, { Component } from 'react';
import { Card } from 'antd';
import { FormattedMessage } from 'react-intl';
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
            let classStatus, status;
            if (this.props.result.available) {
                classStatus = "available";
                status = <FormattedMessage id="card.available"
                    defaultMessage="Available" />;
            } else {
                classStatus = "taken";
                status = <FormattedMessage id="card.taken"
                    defaultMessage="Taken" />;
            }

            return (
                <div className={"card " + classStatus}>
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
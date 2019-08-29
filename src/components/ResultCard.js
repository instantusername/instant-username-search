import React, { Component } from "react";
import { Card } from "antd";
import { FormattedMessage } from "react-intl";
import "../styles/ResultCard.css";

const { Meta } = Card;

class ResultCard extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className={"loading card"}>
          <Card hoverable loading={true}></Card>
        </div>
      );
    } else if (this.props.ad) {
      return (
        <div className={"card ad"}>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

          <ins
            className="adsbygoogle"
            style={{
              display: "inlineBlock",
              width: "214px",
              minHeight: "93px"
            }}
            data-ad-client="ca-pub-2749239984003144"
            data-ad-slot="2583466004"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      );
    } else {
      let classStatus, status;
      if (this.props.result.available) {
        classStatus = "available";
        status = (
          <FormattedMessage id="card.available" defaultMessage="Available" />
        );
      } else {
        classStatus = "taken";
        status = <FormattedMessage id="card.taken" defaultMessage="Taken" />;
      }

      return (
        <div className={"card " + classStatus}>
          <a
            href={this.props.result.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card hoverable>
              <Meta title={this.props.result.service} description={status} />
            </Card>
          </a>
        </div>
      );
    }
  }
}

export default ResultCard;

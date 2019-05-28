import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Input, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
import '../styles/Search.css';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    onChange = (event) => {
        // niceInput is the url friendly version of the input
        let niceInput = event.target.value.replace(/[^a-zA-Z0-9-_.]/g, '');

        if (niceInput !== this.state.input) {
            this.setState({
                input: niceInput
            }, () => {
                if (niceInput !== '') {
                    this.props.onSearch(niceInput);
                } else {
                    this.props.onEmpty();
                }
            });
        }
    }
    render() {
        return (
            <div className="search">
                <div className="header">
                    {/* <Link to={"/"} onClick={this.props.reset}>
                        <Icon type="thunderbolt" theme="filled" />
                    </Link>
                    <Link to={"/"} onClick={this.props.reset}>
                        <h1>Instant Username Search</h1>
                    </Link> */}
                    <Icon type="thunderbolt" theme="filled" />
                    <h1>Instant Username Search</h1>
                </div>
                <FormattedMessage id="app.search.placeholder" defaultMessage="Search username">
                    {
                        placeholder => (
                            <Input placeholder={placeholder} size="large" allowClear
                                value={this.state.input} onChange={this.onChange} />
                        )
                    }
                </FormattedMessage>
            </div>
        );
    }
}

export default Search;

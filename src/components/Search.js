import React, { Component } from 'react';
import { Input, Icon } from 'antd';
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
    render() {

        return (
            <div className="search">
                <div className="header">
                    <Icon type="thunderbolt" theme="filled" />
                    <h1>Instant Username Search</h1>
                </div>
                <Input placeholder="Search username" size="large" allowClear value={this.state.input} onChange={this.onChange} />
            </div>
        );
    }
}

export default Search;

import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import '../styles/Search.css';
    
export class Search extends Component{
    
onChange = (event) => {
    this.props.onSearch(event.target.value);
}
render(){
    
    return (
        <div className="search">
            <div className="header">
                <Icon type="thunderbolt" theme="filled" />
                <h1>Instant Username Search</h1>
            </div>
            <Input placeholder="Search username" size="large" allowClear onChange={this.onChange}/>
        </div>
    );
}
}

export default Search;

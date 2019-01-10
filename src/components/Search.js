import React, { Component } from 'react';
import { Input } from 'antd';
import { Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import '../styles/Search.css';


const StyledSearch = styled.div`
        width: ${props => props.width || "700px"};
        margin-left: auto;
        margin-right: auto;
    `
    
export class Search extends Component{
    
onChange = (event) => {
    this.props.onSearch(event.target.value);
}
render(){
    
    return (
        <StyledSearch width={this.props.width}>
            <Header as='h1'>
                <Icon name='lightning' color='yellow' />
                <Header.Content>Instant Username Search</Header.Content>
            </Header>
            <Input.Search placeholder="username" enterButton="Search" size="large" onChange={this.onChange}/>
        </StyledSearch>
    );
}
}

export default Search;

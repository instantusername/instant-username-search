import React, { Component } from 'react';
import { Input } from 'antd';
import { Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import '../styles/Search.css';



export class Search extends Component{
render(){
    const StyledSearch = styled.div`
        width: ${props => props.width || "700px"};
        margin-left: auto;
        margin-right: auto;
    `
    return (
        <StyledSearch width={this.props.width}>
            <Header as='h1'>
                <Icon name='lightning' color='yellow' />
                <Header.Content>Instant Username Search</Header.Content>
            </Header>
            <Input.Search placeholder="username" enterButton="Search" size="large" onSearch={value => console.log(value)}/>
        </StyledSearch>
    );
}
}

export default Search;

import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component{

  render(){
    return(
      <footer>
        <div className='pull-left'>
            {'© ' + new Date().getFullYear()} <a href="https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE">GPL 3.0</a>
        </div>
        <div className='pull-right'>
            <a href="https://github.com/umutcanbolat/instant-username-search/">Contribute on Github</a>
        </div>
      </footer>
    );
  }
}
export default Footer;
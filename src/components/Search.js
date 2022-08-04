import React, { useState } from 'react';
import { Input, Icon } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/Search.css';

export default function Search({ onChange }) {
  const [input, setInput] = useState('');

  const handleChange = text => {
    let urlFriendlyInput = text.replace(/[^a-zA-Z0-9-_.]/g, '');
    setInput(urlFriendlyInput);
    onChange(urlFriendlyInput);
  };

  return (
    <div className="search">
      <Link
        to={'/'}
        onClick={() => {
          handleChange('');
        }}
      >
        <div className="header">
          <Icon type="thunderbolt" theme="filled" />
          <h1>Instant Username Search</h1>
        </div>
      </Link>
      <Input
        placeholder={'Search username'}
        size="large"
        allowClear
        value={input}
        onChange={event => handleChange(event.target.value)}
        autoFocus
      />
    </div>
  );
}

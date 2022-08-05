import React, { useState, useCallback } from 'react';
import { Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import debounce from 'debounce';

import '../styles/Search.css';

export default function Search({ onInputChange, onStateChange }) {
  const [input, setInput] = useState('');

  const debouncedSearchHandler = useCallback(
    debounce(input => {
      onInputChange(input);
      onStateChange('search');
    }, 800),
    [],
  );

  const handleChange = text => {
    if (isEmpty(text)) {
      debouncedSearchHandler.clear();
      setInput('');
      onInputChange('');
      onStateChange('empty');
      return;
    }
    onStateChange('userTyping');

    let urlFriendlyInput = text.replace(/[^a-zA-Z0-9-_.]/g, '');
    setInput(urlFriendlyInput);
    debouncedSearchHandler(urlFriendlyInput);
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

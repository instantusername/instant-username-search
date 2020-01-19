/* eslint-disable react/prop-types */
import React, { useMemo, useState, useCallback } from 'react';
import { Input, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
// TODO: use styled components instead
import '../styles/Search.css';

export default function Search({ onChange }) {
  const [input, setInput] = useState('');

  const inputChanged = useCallback(
    ({ target }) => {
      // niceInput is the url friendly version of the input
      let niceInput = target.value.replace(/[^a-zA-Z0-9-_.]/g, '');
      setInput(niceInput);
      onChange(niceInput);
    },
    [onChange],
  );

  const clearInput = useCallback(() => {
    setInput('');
    onChange('');
  }, [onChange]);

  return useMemo(() => {
    return (
      <div className="search">
        <Link
          to={'/'}
          onClick={() => {
            clearInput();
          }}
        >
          <div className="header">
            <Icon type="thunderbolt" theme="filled" />
            <h1>
              <FormattedMessage id="app.name" defaultMessage="Instant Username Search" />
            </h1>
          </div>
        </Link>
        <FormattedMessage id="app.search.placeholder" defaultMessage="Search username">
          {placeholder => (
            <Input
              placeholder={placeholder}
              size="large"
              allowClear
              value={input}
              onChange={inputChanged}
            />
          )}
        </FormattedMessage>
      </div>
    );
  }, [input, clearInput, inputChanged]);
}

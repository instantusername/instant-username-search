import React, { useMemo, useRef, useEffect } from 'react';
import { Input, Icon, Select } from 'antd';
import { Link } from 'react-router-dom';
// TODO: use styled components instead
import '../styles/Search.css';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Search({ input, onChange, services, onFilterChange }) {
  const inputRef = useRef();
  const [filters, setFilters] = useLocalStorage('filters', []);
  const [selectedObjects, setSelectedObjects] = useLocalStorage('filterObjects', []);

  useEffect(() => {
    onFilterChange(selectedObjects);
  }, [onFilterChange, selectedObjects]);

  const prettifyInput = input => {
    // niceInput is the url friendly version of the input
    return input.replace(/[^a-zA-Z0-9-_.]/g, '');
  };

  const inputChanged = ({ target }) => {
    onChange(prettifyInput(target.value));
  };

  const clearInput = () => {
    onChange('');
  };

  const findServiceObjects = selections => {
    return services?.filter(s => selections?.includes(s.service));
  };

  const onSearchTargetChange = values => {
    setFilters(values);
    setSelectedObjects(findServiceObjects(values));
    clearInput();
  };

  const searchContent = useMemo(() => {
    return (
      <>
        <Link
          to={'/'}
          onClick={() => {
            clearInput();
          }}
        >
          <div className="header">
            <Icon type="thunderbolt" theme="filled" />
            <h1>{'Instant Username Search'}</h1>
          </div>
        </Link>
        <Input
          ref={inputRef}
          placeholder={'Search username'}
          size="large"
          allowClear
          value={input}
          onChange={inputChanged}
          autoFocus
        />
      </>
    );
  }, [input]);

  const filterContent = useMemo(() => {
    return (
      <div className="advancedSearchWrapper">
        <div>Limit search targets</div>
        <Icon type="plus" />
        <Select
          mode="multiple"
          size="large"
          className="targetSelector"
          placeholder="Select search targets"
          onChange={onSearchTargetChange}
          defaultValue={filters}
        >
          {services?.map(s => (
            <Select.Option key={s.service}>{s.service}</Select.Option>
          ))}
        </Select>
      </div>
    );
  }, [services]);

  return (
    <div className="search">
      {searchContent}
      {filterContent}
    </div>
  );
}

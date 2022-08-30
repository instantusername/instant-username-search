import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { Input, Icon, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';
import useLocalStorage from '../hooks/useLocalStorage';
// TODO: use styled components instead
import '../styles/Search.css';

export default function Search({ input, onChange, services, onFilterChange }) {
  const inputRef = useRef();
  const [filters, setFilters] = useLocalStorage('filters', []);
  const [selectedObjects, setSelectedObjects] = useLocalStorage('filterObjects', []);
  const [isFilterActive, setFilterActive] = useState(Boolean(selectedObjects.length));

  useEffect(() => {
    onFilterChange(selectedObjects);
  }, [onFilterChange, selectedObjects]);

  const prettifyInput = useCallback(input => {
    // niceInput is the url friendly version of the input
    return input.replace(/[^a-zA-Z0-9-_.]/g, '');
  }, []);

  const inputChanged = useCallback(
    ({ target }) => {
      onChange(prettifyInput(target.value));
    },
    [onChange, prettifyInput],
  );

  const findServiceObjects = useCallback(
    selections => {
      return services?.filter(s => selections?.includes(s.service));
    },
    [services],
  );

  const onSearchTargetChange = useCallback(
    values => {
      setFilters(values);
      setSelectedObjects(findServiceObjects(values));
      onChange('');
    },
    [onChange, setSelectedObjects, setFilters, findServiceObjects],
  );

  const onSearchOptionButtonClick = () => {
    setFilterActive(oldState => !oldState);
  };

  const searchContent = useMemo(() => {
    return (
      <>
        <Link
          to={'/'}
          onClick={() => {
            onChange('');
          }}
        >
          <div className="header">
            <Icon type="thunderbolt" theme="filled" />
            <h1>{'Instant Username Search'}</h1>
          </div>
        </Link>
        <Input
          ref={inputRef}
          className="searchInput"
          placeholder={'Search username'}
          size="large"
          allowClear
          value={input}
          onChange={inputChanged}
          autoFocus
        />
      </>
    );
  }, [input, onChange, inputChanged]);

  const filterContent = useMemo(() => {
    return (
      <>
        <Select
          mode="multiple"
          size="large"
          className="targetSelector"
          placeholder="Select sites to filter"
          onChange={onSearchTargetChange}
          defaultValue={filters}
          allowClear
        >
          {services?.map(s => (
            <Select.Option key={s.service}>{s.service}</Select.Option>
          ))}
        </Select>
        <Button className="searchOptionButton" onClick={onSearchOptionButtonClick}>
          Options <SettingOutlined />
        </Button>
      </>
    );
  }, [services, filters, onSearchTargetChange]);

  const filterContentWrapper = useMemo(() => {
    return (
      <div className={`advancedSearchWrapper ${isFilterActive && 'active'}`}>{filterContent}</div>
    );
  }, [filterContent, isFilterActive]);

  return (
    <div className="search">
      {searchContent}
      {filterContentWrapper}
    </div>
  );
}

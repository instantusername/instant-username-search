/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { Card, Spin } from 'antd';
import { FormattedMessage } from 'react-intl';
import '../styles/ResultCard.css';

const { Meta } = Card;

export default function ResultCard({ username, serviceName, endpoint }) {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});

  useEffect(() => {
    // instantiniate a new controller for this cycle
    let controller = new AbortController();
    let signal = controller.signal;

    async function fetchAvailability() {
      setIsLoading(true);

      const response = await fetch(endpoint, { signal });
      const responseJSON = await response.json();
      setResponse(responseJSON);
      setIsLoading(false);
    }
    fetchAvailability();

    return () => {
      // abort requests
      if (controller !== undefined) {
        controller.abort();
      }
    };
  }, [username]);

  return useMemo(() => {
    let classStatus = '';
    if (!isLoading) {
      // if the result is fetched already
      classStatus = response && response.available ? 'available' : 'taken';
    }
    return (
      <div className={'card ' + classStatus}>
        <a href={'/#'} target="_blank" rel="noopener noreferrer">
          <Card hoverable>
            <Spin spinning={isLoading}>
              <Meta title={serviceName} description={'available'} />
            </Spin>
          </Card>
        </a>
      </div>
    );
  }, [isLoading, response]);
}

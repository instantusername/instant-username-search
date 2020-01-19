/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { Card, Spin } from 'antd';
import { FormattedMessage } from 'react-intl';
import '../styles/ResultCard.css';

const { Meta } = Card;

export default function ResultCard({ username, serviceName, endpoint, spin }) {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});

  useEffect(() => {
    // instantiniate a new controller for this cycle
    let controller = new AbortController();
    let signal = controller.signal;

    async function fetchAvailability() {
      setIsLoading(true);

      await fetch(endpoint, { signal })
        .then(response => response.json())
        .then(responseJSON => {
          setResponse(responseJSON);
        })
        .catch(e => {
          // console.error(e.message);
          // Let's act like nothing happened :pp
        });

      setIsLoading(false);
    }

    if (!spin) {
      fetchAvailability();
    }

    return () => {
      // abort requests
      if (controller !== undefined) {
        controller.abort();
      }
    };
  }, [username, endpoint, spin]);

  return useMemo(() => {
    let classStatus = '';
    if (!(isLoading || spin)) {
      // if the result is fetched already
      classStatus = response && response.available ? 'available' : 'taken';
    }

    return (
      <div className={'card ' + classStatus}>
        <a href={'/#'} target="_blank" rel="noopener noreferrer">
          <Card hoverable>
            <Spin spinning={isLoading || spin}>
              <Meta title={serviceName} description={'available'} />
            </Spin>
          </Card>
        </a>
      </div>
    );
  }, [isLoading, response, serviceName, username, spin]);
}

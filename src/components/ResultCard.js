/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { Card, Spin } from 'antd';
import { FormattedMessage } from 'react-intl';
import '../styles/ResultCard.css';

const { Meta } = Card;

export default function ResultCard({ username, serviceName, spin }) {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});
  const apiUrl = `${window.apiUrl}check/${serviceName}/${username}/`;

  useEffect(() => {
    // instantiniate a new controller for this cycle
    let controller = new AbortController();
    let signal = controller.signal;

    async function fetchAvailability() {
      setIsLoading(true);

      // await fetch(apiUrl, { signal })
      //   .then(response => response.json())
      //   .then(responseJSON => {
      //     setResponse(responseJSON);
      //   })
      //   .catch(e => {
      //     // console.error(e.message);
      //     // Let's act like nothing happened :pp
      //   });
      console.log(username);

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
  }, [username, serviceName, spin]);

  return useMemo(() => {
    let classStatus = '';
    if (!isLoading) {
      // if the result is fetched already
      classStatus = response && response.available ? 'available' : 'taken';
    }

    return spin ? (
      <div className={'card ' + classStatus}>
        <a href={'/#'} target="_blank" rel="noopener noreferrer">
          {/* <Card hoverable>
            <Spin spinning={isLoading}>
              <Meta title={serviceName + '' + username} description={'available'} />
            </Spin>
          </Card> */}
          {spin + '' + serviceName}
        </a>
      </div>
    ) : (
      <div className={'card ' + classStatus}>
        <a href={'/#'} target="_blank" rel="noopener noreferrer">
          {/* <Card hoverable>
            <Spin spinning={isLoading}>
              <Meta title={serviceName + '' + username} description={'available'} />
            </Spin>
          </Card> */}
          {isLoading + ' ' + username + ' ' + serviceName + ': ' + response.available}
        </a>
      </div>
    );
  }, [isLoading, response, serviceName, username, spin]);
}

import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Landing.css';
import astronaut from '../resources/astronaut.svg';
import santa from '../resources/santa.svg';

export default function Landing() {
  return (
    <>
      <div className="landing">
        <div className="astronaut">
          <img alt="astronaut" id="astronaut" src={astronaut} />
          <img alt="santa" id="santa" src={santa} />
        </div>
        <div className="intro">
          <h2>
            <FormattedMessage
              id="app.description.title"
              defaultMessage="Check username availability as you type"
              description="Description title on main page"
            />
          </h2>
          <p>
            <FormattedMessage
              id="app.description.body"
              defaultMessage="{appName} will check more than 100 social media sites for you. Results will appear here as you type!"
              description="Description body on main page"
              values={{ appName: 'Instant Username Search' }}
            />
          </p>
        </div>
      </div>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2749239984003144"
        data-ad-slot="2360118035"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
}

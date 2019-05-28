import React from 'react';
import { FormattedMessage } from "react-intl";
import '../styles/Landing.css'
import astronaut from '../resources/astronaut.svg'

export default function Landing() {
    return (
        <div className='landing'>
            <img alt='astronaut' className='astronaut' src={astronaut} />
            <div className='intro'>
                <h2>
                    <FormattedMessage id="app.description.title"
                        defaultMessage="Check username availability as you type"
                        description="Description title on main page" />
                </h2>
                <p>
                    <FormattedMessage id="app.description.body"
                        defaultMessage="{appName} will check more than 100 social media sites for you. Results will appear here as you type!"
                        description="Description body on main page"
                        values={{ appName: 'Instant Username Search' }} />
                </p>
            </div>
        </div>
    )
}
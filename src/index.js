import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_tr from 'react-intl/locale-data/tr';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";
import messages_tr from "./translations/tr.json";

addLocaleData([...locale_en, ...locale_de, ...locale_tr]);

const messages = {
    'de': messages_de,
    'en': messages_en,
    'tr': messages_tr
};

const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <Router>
            <Route path="/:lang/" exact component={App} />
        </Router>
    </IntlProvider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

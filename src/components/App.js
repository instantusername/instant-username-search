import React, { Component } from 'react';
import { debounce } from "debounce";
import Search from './Search';
import Results from './Results';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import astronaut from '../resources/astronaut.svg'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import '../styles/App.css';
import { IntlProvider } from "react-intl";
import { FormattedMessage } from 'react-intl';
import { addLocaleData } from "react-intl";

import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_tr from 'react-intl/locale-data/tr';
import locale_es from 'react-intl/locale-data/es';
import locale_ca from 'react-intl/locale-data/ca';
import locale_fr from 'react-intl/locale-data/fr';

import messages_de from "../translations/de.json";
import messages_en from "../translations/en.json";
import messages_tr from "../translations/tr.json";
import messages_es from "../translations/es.json";
import messages_ca from "../translations/ca.json";
import messages_fr from "../translations/fr.json";

window.apiUrl = 'https://instant-username-search-api.herokuapp.com/';
const checkEndpoint = window.apiUrl + 'check';

addLocaleData([...locale_en, ...locale_de, ...locale_tr, ...locale_es, ...locale_ca, ...locale_fr]);
const messages = {
  'de': messages_de,
  'en': messages_en,
  'tr': messages_tr,
  'ca': messages_ca,
  'es': messages_es,
  'fr': messages_fr
};
var language = navigator.language.split(/[-_]/)[0];  // language without region code

// AbortController and signal to cancel fetch requests
var controller;
var signal;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [],
      results: [],
      isQueried: false
    }
  }

  componentDidMount = () => {
    // fetch all the services available to check
    fetch(window.apiUrl + 'services/getAll')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          sites: responseJson
        });
      })
      .catch((e) => {
        console.log('error while fetching services list' + e.message);
      });
  }

  componentWillReceiveProps = (nextProps) => {
    const { match: { params: { lang } } } = nextProps;
    if (lang) {
      language = lang;
    }
  }

  componentWillMount = () => {
    const { match: { params: { lang } } } = this.props;
    if (lang) {
      language = lang;
    }
  }

  componentWillUnmount = () => {
    // cancel all requests before unmounting
    this.cancelAllRequests();
  }

  search = (username) => {
    if (this.state.isQueried) {
      // instantiniate a new controller for this cycle
      controller = new AbortController();
      signal = controller.signal;

      // loop through all sites and check the availability
      for (let i = 0; i < this.state.sites.length; i++) {
        const checkService = this.state.sites[i].endpoint;
        const checkUser = checkService.replace('{username}', username);

        fetch(checkEndpoint + checkUser, { signal })
          .then(response => response.json())
          .then(responseJson => {
            let newResults = [].concat(this.state.results);
            newResults.push(responseJson);
            this.setState({
              results: newResults
            });
          })
          .catch((e) => {
            //console.log(e.message);
          });
      }
    }
  }

  // debounce the search function
  debouncedSearch = debounce(this.search, 800);

  // search on input changes
  inputChanged = (input) => {
    this.setState({
      isQueried: true
    });

    this.cancelAllRequests();
    this.setState({
      results: []
    });

    // invoke debounced search
    this.debouncedSearch(input);
  }

  inputEmptied = () => {
    this.cancelAllRequests();
    this.setState({
      isQueried: false
    });
  }

  cancelAllRequests = () => {
    if (controller !== undefined) {
      controller.abort();
    }
  }

  render() {
    const { match: { params: { page } } } = this.props;

    const landingPage = (
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
        {/* <PrivacyPolicy /> */}
      </div>
    );

    let content;
    if (this.state.isQueried) {
      if (this.state.results.length === 0) {
        // loading results
        content = <Results loading={true} />;
      } else {
        // show results
        content = <Results results={this.state.results} />;
      }
    } else {
      // empty search
      switch (page) {
        case "privacy":
          content = <PrivacyPolicy />
          break;
        case "terms":
          //terms and conditions
          break;
        case "contact":
          // contact info
          break;
        default:
          content = landingPage;
          break;
      }
    }

    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div>
          <div className="jumbotron">
            <div className="container" id="jumbotron">
              <Search onSearch={this.inputChanged} onEmpty={this.inputEmptied} />
            </div>
          </div>
          <div className="container" id="content">
            {content}
          </div>
          <div id="footer">
            <hr />
            <div className="container">
              <Footer page={page} />
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default App;

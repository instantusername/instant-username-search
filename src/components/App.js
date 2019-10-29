import React, { Component } from 'react';
import { debounce } from 'debounce';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';
import Privacy from './Privacy';
import Terms from './Terms';
import LandingPage from './Landing';

import { IntlProvider, addLocaleData } from 'react-intl';
import {
  locale_ca,
  locale_de,
  locale_en,
  locale_es,
  locale_fr,
  locale_ru,
  locale_tr,
  locale_uk,
} from '../translations/locales';
import {
  messages_ca,
  messages_de,
  messages_en,
  messages_es,
  messages_fr,
  messages_ru,
  messages_tr,
  messages_uk,
} from '../translations';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../styles/App.css';

window.apiUrl = process.env.REACT_APP_API_URL;
const checkEndpoint = window.apiUrl + 'check';
const initSearchEndpoint = window.apiUrl + 'initSearch';

addLocaleData([
  ...locale_en,
  ...locale_de,
  ...locale_tr,
  ...locale_es,
  ...locale_ca,
  ...locale_fr,
  ...locale_uk,
  ...locale_ru,
]);
const messages = {
  de: messages_de,
  en: messages_en,
  tr: messages_tr,
  ca: messages_ca,
  es: messages_es,
  fr: messages_fr,
  uk: messages_uk,
  ru: messages_ru,
};

// AbortController and signal to cancel fetch requests
var controller;
var signal;

const initialState = {
  sites: [],
  results: [],
  isQueried: false,
  language: navigator.language.split(/[-_]/)[0], // language without region code
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset = () => {
    this.setState(initialState);
    this.componentDidMount();
  };

  componentDidMount = () => {
    // fetch all the services available to check
    fetch(window.apiUrl + 'services/getAll')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          sites: responseJson,
        });
      })
      .catch(e => {
        console.error(
          'Error while fetching services list from /services/getAll endpoint: ' + e.message,
        );
      });
  };

  componentWillReceiveProps = nextProps => {
    const {
      match: {
        params: { lang },
      },
    } = nextProps;
    if (lang) {
      this.setState({ language: lang });
    }
  };

  componentWillMount = () => {
    const {
      match: {
        params: { lang },
      },
    } = this.props;
    if (lang) {
      this.setState({ language: lang });
    }
  };

  componentWillUnmount = () => {
    // cancel all requests before unmounting
    this.cancelAllRequests();
  };

  search = username => {
    if (this.state.isQueried) {
      this.initSearchQuery(username);
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
              results: newResults,
            });
          })
          .catch(e => {
            // console.log(e.message);
            // Let's act like nothing happened :pp
          });
      }
    }
  };

  initSearchQuery = username => {
    const initData = {
      username,
      userAgent: navigator.userAgent,
      language: this.state.language,
      client: 'web',
    };
    console.log(initData);

    fetch(initSearchEndpoint, {
      method: 'POST',
      // mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(initData),
    });
  };

  // debounce the search function
  debouncedSearch = debounce(this.search, 800);

  // search on input changes
  inputChanged = input => {
    this.setState({
      isQueried: true,
    });

    this.cancelAllRequests();
    this.setState({
      results: [],
    });

    // invoke debounced search
    this.debouncedSearch(input);
  };

  inputEmptied = () => {
    this.cancelAllRequests();
    this.setState({
      isQueried: false,
    });
  };

  cancelAllRequests = () => {
    if (controller !== undefined) {
      controller.abort();
    }
  };

  render() {
    const {
      match: {
        params: { page },
      },
    } = this.props;

    // main content of page
    let content;

    if (this.state.isQueried) {
      if (this.state.results.length === 0) {
        // loading results
        content = <Results loading={true} />;
      } else {
        // show results
        const resultCards = this.state.results;
        // if (resultCards.length === 1) {
        //   resultCards.splice(1, 0, { cardType: 'ad' });
        // }
        content = <Results results={resultCards} />;
      }
    } else {
      // empty search
      switch (page) {
        case 'privacy':
          content = <Privacy />;
          break;
        case 'terms':
          //terms and conditions
          content = <Terms />;
          break;
        default:
          content = <LandingPage />;
          break;
      }
    }

    return (
      <IntlProvider locale={this.state.language} messages={messages[this.state.language]}>
        <div>
          <div className="jumbotron">
            <div className="container" id="jumbotron">
              <Search onSearch={this.inputChanged} onEmpty={this.inputEmptied} reset={this.reset} />
            </div>
          </div>
          <div className="container" id="content">
            {content}
          </div>
          <div id="footer">
            <hr />
            <div className="container">
              <Footer page={page} lang={this.state.language} />
            </div>
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Route path="/:lang/" exact component={App} />
    </Router>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});

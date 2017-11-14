import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Appstore';
import NoMatch from './components/Nomatch';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="b-layout">
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

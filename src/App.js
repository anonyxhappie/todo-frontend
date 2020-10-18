import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';

import Buckets from './components/Buckets';
import BucketForm from './components/BucketForm';
import TodoItems from './components/TodoItems';
import TodoItemForm from './components/TodoItemForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Todo App</h1>
            </header>
            <hr />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <BucketForm />
                    <hr/>
                    <Buckets />
                  </React.Fragment>
                )}
              />

              <Route
                path="/bucket/:uuid/"
                render={props => (
                  <React.Fragment>
                    <TodoItemForm {...props}/>
                    <hr/>
                    <TodoItems {...props}/>
                  </React.Fragment>
                )}
              />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

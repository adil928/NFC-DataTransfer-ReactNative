import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureStore from './redux/store';
import Container from './containers';

const initialState = fromJS({});
const store = configureStore(initialState);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

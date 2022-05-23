import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from "react-redux"
import { createStore } from "redux";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import reducer from '../../redux/reducers';

const renderWithRR = (component,
  {
    initialState,
    store = createStore(reducer, initialState)
  } = {}) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <Provider store={store}>
          {component}
        </Provider>
      </Router>
    ),
    history,
    store,
  }
};

export default renderWithRR;

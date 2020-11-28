import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//import createStore from redux
import { createStore } from 'redux';

//import provider from react-redux
import { Provider } from 'react-redux';

//import car reducer from reducer folder
import { carReducer } from './reducers/carReducer';

//Set up empty reducer and initial state.
const store = createStore(carReducer)

//Set up store and provider by wrapping Provider around App

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store = { store }>
<App />
</Provider>
, rootElement

);

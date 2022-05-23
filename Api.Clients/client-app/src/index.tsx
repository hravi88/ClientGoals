import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

reportWebVitals();

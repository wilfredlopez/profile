import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { StoreProvider, createStore } from "easy-peasy"
import model from "./model";  //Easy-Peasy React Redux Model
import 'bootstrap/dist/css/bootstrap.min.css' //YOU CAN REMOVE IF ITS NOT REQUIRED
import 'semantic-ui-less/semantic.less'

const store = createStore(model)

//replaced the browser router for hash router for it to work bettter on github pages
//<BrowserRouter basename="/">
ReactDOM.render(
    <HashRouter>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </HashRouter>
    , document.getElementById('root'));

serviceWorker.unregister();

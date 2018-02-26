import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducer';
import { signalGo, signalStop, signalCaution } from './actions/action-type';


import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './App';

const store = createStore(rootReducer);

window.store = store;
window.signalGo = signalGo;
window.signalStop = signalStop;
window.signalCaution = signalCaution;

/*
window.store.subscribe(()=>{ 
    console.log(store.getState());
});
*/

ReactDOM.render(
    <Provider store = {store} >
            <App />
    </Provider>        
            , document.getElementById('root'));
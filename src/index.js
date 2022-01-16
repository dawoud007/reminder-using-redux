import React from 'react'
import App from './component/app.js'
import ReactDom from 'react-dom'
import reminder from './redusers/index.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"
const store=createStore(reminder)
ReactDom.render( 
    
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
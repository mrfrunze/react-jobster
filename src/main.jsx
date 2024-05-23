import React from 'react'
import ReactDOM from 'react-dom/client'
import "normalize.css"
import './index.css'
import App from './App.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App tab="home"/>
  </Provider>,
)

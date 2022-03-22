// import 'babel-polyfill'

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import ReduxThunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import reducer from './origin_store/reducer'

// import App from './components/App'

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import slice from './toolkit_store/slice'

import App from './components/App'

const store = configureStore({
  reducer: slice.reducer,
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

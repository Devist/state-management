import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import reducer from './store/reducer'

import App from './components/App'

// configureStore 는 기존의 redux-saga 등 다른 미들웨어 추가가 가능
// 기본적으로 redux-devtool을 내장하고 있음
const store = configureStore({ reducer })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

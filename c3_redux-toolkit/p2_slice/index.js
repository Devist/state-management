import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './components/App'
import slice from './store/slice'

// step4. 스토어에 넣는 방식도 바뀜.
const store = configureStore({ reducer: slice.reducer })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

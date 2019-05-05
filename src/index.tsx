/* app/index.tsx */
import * as React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore } from './store'
import App from './containers/App'
import { RootState } from './types';

export const initState: RootState = {
  loginStatus: false,
  articleList: [],
  currentContent: {
    title: '',
    content: '',
    date: '',
    auth: ''
  }
}

const store = createStore(initState)

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')!,
)

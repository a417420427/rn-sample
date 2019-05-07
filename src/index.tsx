/* app/index.tsx */
import * as React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore, initState } from './store'
import App from './containers/App'

const store = createStore(initState)

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')!,
)

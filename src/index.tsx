/* app/index.tsx */
import * as React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore, initState } from './store'
import App from './containers/App'
import { initRaven, Sentry, RavenErrorBoundary } from './Raven'
import './styles/index.scss'

initRaven('https://809881a02b0c4dedbedcfcea883b0c1d@sentry.io/1455013')


const store = createStore(initState)
// https://809881a02b0c4dedbedcfcea883b0c1d@sentry.io/1455013
render(
  <RavenErrorBoundary>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </RavenErrorBoundary>,
  document.getElementById('app')!,
)

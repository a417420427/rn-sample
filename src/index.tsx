/* app/index.tsx */
import * as React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore } from './store'
import { App } from './App'

const initState = {}
createStore(initState).then((store) => {
  
console.log(store)
  render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    document.getElementById('app')!,
  )
})

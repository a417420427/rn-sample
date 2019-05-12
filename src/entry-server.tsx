/* app/index.tsx */
import * as React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { generalStore as createStore, initState } from './store'
import { initRaven, RavenErrorBoundary } from './Raven'
import './styles/index.scss'
import { router } from "./router";
import Root from './App'
import { StaticRouter } from 'react-router';
initRaven('https://809881a02b0c4dedbedcfcea883b0c1d@sentry.io/1455013')



const createApp = (context, url, store) => {
    const App: any = () => {
        return (
            <RavenErrorBoundary>
                <ReduxProvider store={store}>
                    <StaticRouter context={context} location={url}>
                        <Root />
                    </StaticRouter>
                </ReduxProvider>
            </RavenErrorBoundary>
        )
    }
    return <App />;
}




export {
    createApp,
    createStore,
    router
};

/* app/index.tsx */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { loadableReady } from "@loadable/component";
import { BrowserRouter as Router } from "react-router-dom";
import { generalStore as createStore, initState } from './store'
import { initRaven, RavenErrorBoundary } from './Raven'
import './styles/index.scss'
import Root from './App'
initRaven('https://809881a02b0c4dedbedcfcea883b0c1d@sentry.io/1455013')



const createApp = (Component) => {
    // 获取服务端初始化的state，创建store
    const store = createStore(initState);
    const App = () => {
        return (
            <RavenErrorBoundary>
                <ReduxProvider store={store}>
                    <Router>
                        <Component />
                    </Router>
                </ReduxProvider>
            </RavenErrorBoundary>
        );
    };
    return <App />;
}

// https://809881a02b0c4dedbedcfcea883b0c1d@sentry.io/1455013

loadableReady().then(() => {
    ReactDOM.hydrate(createApp(Root), document.getElementById("app"));
});


// 热更新
if (module.hot) {
    module.hot.accept("'./containers/App'", () => {
        const NewApp = require("'./containers/App'").default;
        ReactDOM.hydrate(createApp(NewApp), document.getElementById("app"));
    });
}

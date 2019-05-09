
import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import * as Loadable from 'react-loadable';  

import { Loading } from './components/Loading';

import './styles/index.scss'

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */'./containers/Home'),
  loading: Loading
})
const Write = Loadable({
  loader: () => import(/* webpackChunkName: "Write" */'./containers/Write'),
  loading: Loading
})
const Signup = Loadable({
  loader: () => import(/* webpackChunkName: "Signup" */'./containers/Signup'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login" */'./containers/Login'),
  loading: Loading
})

interface IAppProps {
  loginStatus: boolean
}
interface IAppState {}


export class App extends React.Component<IAppProps, IAppState> {
  // 重定向
  private renderApp = () => {
    if(this.props.loginStatus) {
      return <Redirect to="/home"/>
    } else {
      return <Redirect to="/login"/>
    }
  }
  public render(): JSX.Element {
    return (
      <Router>
          <Route exact path="/" render={this.renderApp}/>
          <Route path="/home" component={(Home)} ></Route>
          <Route path="/write" component={(Write)} />
          <Route path="/login" component={(Login)} />
          <Route path="/signup" component={(Signup)} />
      </Router>
    )
  }
}



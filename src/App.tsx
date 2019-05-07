
import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import loginBg from './assets/background.jpg'


import Home from './containers/Home'
import Write from './containers/Write'

import Signup from './containers/Signup'

import Login from './containers/Login'

import './styles/index.scss'

 console.log(loginBg)


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
          <Route path="/home" component={Home} ></Route>
          <Route path="/write" component={Write} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        
      </Router>
    )
  }
}



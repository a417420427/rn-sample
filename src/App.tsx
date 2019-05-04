
import * as React from 'react'
import {PageHeader} from './components/PageHeader'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {Home} from './pages/Home'
import {Write} from './pages/Write'
import {Login} from './pages/Login'
import {Signup} from './pages/Signup'


import './styles/reset.scss'







interface IAppProps {}
interface IAppState {}

export class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    console.log(this)
    return (
      <Router>
        <div>
          <Route path="/home" component={Home} ></Route>
          <Route path="/write" component={Write} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    )
  }
}
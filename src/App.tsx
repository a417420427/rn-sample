
import * as React from 'react'
import {NestedRoute , router} from './router'
import { Switch } from 'react-router';

import './styles/index.scss'


interface IAppProps {}
interface IAppState {}


export default class App extends React.Component<IAppProps, IAppState> {
  // 重定向

  public render(): JSX.Element {
    return (
      <Switch>
      {
         router.map((route, i) =>
         <NestedRoute key={i} {...route} />
       )
      }
    </Switch>
    )
  }
}



import * as React from 'react'
import { RouteComponentProps } from 'react-router'

interface LoginProps extends  RouteComponentProps{
    loginStatus: boolean
}
export class Home extends React.Component<LoginProps> {
    componentWillMount(){
        if(!this.props.loginStatus) {
            this.props.history.push('/login')
        }
    }
    render() {
        return <div className="page-home">
            <h1>主页</h1>
        </div>
    }
}
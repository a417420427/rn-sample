import * as React from 'react'
import { RouteComponentProps } from 'react-router'


interface LoginProps extends RouteComponentProps {
    loginStatus: boolean
}


export class Login extends React.Component<LoginProps> {
    componentWillMount() {
        if(this.props.loginStatus) {
            this.props.history.push('/home')
        }
    }

    render() {
        console.log(this)
        return <div className="page-login">
            <h1>登陆</h1>
        </div>
    }
}
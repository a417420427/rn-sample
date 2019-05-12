import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom';
import { LoginData } from '../../types'
import './index.scss'
interface LoginProps extends RouteComponentProps {
    loginStatus: boolean
    onLogin: (data: LoginData) => void
}



interface LoginState extends LoginData {}

// const useBind = () => {
//     const [val ,setVal] = React.useState('');
//     const onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
//         setVal(e.currentTarget.value)
//     }
//     return [val, onChange]
// }


export class Login extends React.Component<LoginProps, LoginState> {
    constructor (props: LoginProps) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentWillMount() {
        console.log(this.props)
        if(this.props.loginStatus) {
            this.props.history.push('/home')
        }
    }

    onLogin = async () => {
        const { username, password } = this.state
        if(!username || !password) return 

       await this.props.onLogin({
           username,
           password
       })

       console.log(this.props.loginStatus   )

    }
    render() {
        return (
            <div className="page-login">
                <div className="login-box dp-f">
                    <div className="login-box-left">
                        <div className="login-left-logo">
                        </div>
                    </div>
                    <div className="login-box-right">
                        <div className="login-title">
                            欢迎登录
                        </div>
                        <div className="login-verify">
                            <div className="login-username">
                                <input 
                                    value={this.state.username} 
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({username: e.currentTarget.value})} 
                                    type="text" placeholder="请输入用户名"
                                />
                            </div>
                            <div className="login-passwprd">
                                <input 
                                value={this.state.password} 
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({password: e.currentTarget.value})} 
                                type="password" placeholder="请输入密码"/>
                            </div>
                            <div className="login-tip dp-f">
                                <div className="tip-confirm">
                                    确定登录
                                </div>
                                <div className="tip-forget">
                                    忘记密码
                                </div>
                            </div>
                            <div className="login-button">
                                <button onClick={ this.onLogin }>确定</button>
                            </div>
                            <div className="login-sig">
                                您还不是会员？要 <Link to='/signup'>立即注册</Link>
                            </div>
                            <div className="login-third dp-n">
                                //todo 第三方登录
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
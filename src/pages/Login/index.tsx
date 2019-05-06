import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import loginBg from '../../assets/af.svg'
import './index.scss'
import { Link } from 'react-router-dom';

interface LoginProps extends RouteComponentProps {
    loginStatus: boolean
}
console.log(loginBg)

export class Login extends React.Component<LoginProps> {
    componentWillMount() {
        if(this.props.loginStatus) {
            this.props.history.push('/home')
        }
    }

    render() {
        console.log(this)
        return <div className="page-login">
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
                            <input type="text" placeholder="请输入用户名"/>
                        </div>
                        <div className="login-passwprd">
                            <input type="password" placeholder="请输入密码"/>
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
                            <button>确定</button>
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
    }
}
import * as React from 'react'
import { LoginData } from '../../types';
import { simplePassword, phonePattern } from '../../utils/pattern';

interface SignupProps {
    signup: (data: LoginData) => void
 }

const SignupContent = React.memo((props: { signup: (data: LoginData) => void }) => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const signupClick = () => {
        if(simplePassword.test(password) && phonePattern.test(username)) {
            props.signup({username, password})
        }
    }

    return <div className="signup-box-right">
        <div>
                <input type="text" value={username} onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.currentTarget.value) }/>
            </div>
            <div>
                <input type="password" value={password} onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value) }/>
            </div>
            <button onClick={signupClick}>注册</button>
    </div>
})

export class Signup extends React.Component<SignupProps> {
    render() {
        return <div className="page-signup">
            <SignupContent signup={this.props.signup} />
        </div>
    }
}
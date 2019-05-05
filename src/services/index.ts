import axios from 'axios'
import { RootState, LoginData } from '../types' 


export const login = async (state:RootState, data: LoginData) => {
    const result = await axios({
        method: 'post',
        url: '/login',
        data
    })

    
    state.loginStatus = !!result || true//(result.status === 200 && result.data.status === 1)
}
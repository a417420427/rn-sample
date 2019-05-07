import axios from '../utils/request'
import { LoginData } from '../types' 


export const login = async (data: LoginData) => {
    const result = await axios({
        method: 'post',
        url: '/login',
        data
    })
    return (result.status === 200 && result.data.status === 1)
}
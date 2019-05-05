

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState, LoginData } from '../types'
import { Actions, actionCreators } from '../store';
import { Login } from '../pages/Login'

const mapStateToProps = (state: RootState) => ({
    loginStatus: state.loginStatus,
    list: state.articleList
})


const mapDispatchToProps =  (dispatch: Dispatch<Actions>, state: RootState) => ({
  login: async (data: LoginData) => {
    return dispatch(actionCreators.login({data}))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)
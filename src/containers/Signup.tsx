

import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { Signup } from '../pages/Signup'
import { RootState, LoginData } from '../types';
import { Actions, actionCreators } from '../store'

const mapStateToProps = (state: RootState) => ({
    loginStatus: state.loginStatus
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>, state: RootState) => {

    return {
        signup: async (data: LoginData) => dispatch(actionCreators.signup({data}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)


import { connect } from 'react-redux';
import {Home} from '../pages/Home'
import { RootState } from '../types'

const mapStateToProps = (state: RootState) => ({
    loginStatus: state.loginStatus
})

export default connect(mapStateToProps)(Home)
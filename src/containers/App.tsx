

import { connect } from 'react-redux';
import {App} from '../App'
import { RootState } from '../types';

const mapStateToProps = (state: RootState) => ({
    loginStatus: state.loginStatus
})

export default connect(mapStateToProps)(App)
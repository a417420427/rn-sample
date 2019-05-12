import { Reducer, createStore as reduxCreateStore, Store, applyMiddleware, createStore} from 'redux'
import { produce } from 'immer'
import { ActionType, createStandardAction} from 'typesafe-actions'
import { login, signup } from '../services';
import { RootState, LoginData } from '../types'
import thunkMiddleware from "redux-thunk";

//state
export const initState: RootState = {
    loginStatus: false,
    articleList: [],
    currentContent: {
      title: '',
      content: '',
      date: '',
      auth: ''
    }
  }

export enum ActionTypes {
    login =  'action:login',
    write = 'action:write',
    list = 'action:list',
    comment = 'action:comment',
    signup = 'action:signup'
}

// actions
export const actionCreators = {
    login: createStandardAction(ActionTypes.login)<{data: LoginData}>(),
    signup: createStandardAction(ActionTypes.signup)<{data: LoginData}>()
}

export type Actions = ActionType<typeof actionCreators>

// reducer
export const reducer = produce( (state: RootState , action: Actions) => {
    switch (action.type) {
        case ActionTypes.login:
             login(action.payload.data).then(res => {
                state.loginStatus = res
             })
             break
        case ActionTypes.signup:
             signup(action.payload.data)
             break
        default:
            return
    }
})

export const catchReducerErrors = (reducer: Reducer): Reducer => {
    return (state, action) =>  reducer(state, action)
}


// export function createStore( initialState?: RootState): Store<RootState> {

//     // store 中间件，根据个人需求添加
//     const middleware = applyMiddleware();
    
//      return reduxCreateStore(
//             catchReducerErrors(reducer),
//             initialState as any,
//             middleware
//       ) as Store<RootState>;
// }



export const generalStore =  (store) => {
    return createStore(
      reducer,
      store,
      applyMiddleware(thunkMiddleware) // 允许store能dispatch函数
    );
  }
  
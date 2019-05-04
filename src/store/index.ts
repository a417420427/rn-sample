import { Reducer, createStore as reduxCreateStore} from 'redux'
import { produce } from 'immer'
import { ActionType, createStandardAction} from 'typesafe-actions'

export interface State {
    loginStatus: boolean
}


export enum ActionTypes {
    login =  'action:login'
}

export const actionCreators = {
    login: createStandardAction(ActionTypes.login)<{status: boolean}>()
  }


export type Actions = ActionType<typeof actionCreators>

export const reducer = produce((state: State , action: Actions) => {
    switch (action.type) {
        case ActionTypes.login:
            state.loginStatus = action.payload.status
        default:
            return
    }
})

export const catchReducerErrors = (reducer: Reducer): Reducer => {
    return (state, action) =>  reducer(state, action)
  }
  
export async function createStore(initState: any = {}) {
    const store = reduxCreateStore(
        catchReducerErrors(reducer),
        initState
    )
    return store
}
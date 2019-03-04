import { INCREMENT } from '../actions/types'
import { Action } from 'redux'

export interface WelcomeState {
  count: number
}

const INITIAL_STATE: WelcomeState = {
  count: 0
}

const welcomeReducer = (state = INITIAL_STATE, action: Action): WelcomeState => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

export default welcomeReducer

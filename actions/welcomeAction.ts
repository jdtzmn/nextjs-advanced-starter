import { INCREMENT } from './types'
import { Action } from 'redux'

export const welcomeAction = (): Action => ({
  type: INCREMENT
})

import reducer from 'reducers/welcomeReducer'
import { INCREMENT } from 'actions/types'

describe('welcome reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {
        type: ''
      })
    ).toEqual({
      count: 0
    })
  })

  it('should handle INCREMENT', () => {
    expect(
      reducer(undefined, {
        type: INCREMENT
      })
    ).toEqual({
      count: 1
    })
  })
})

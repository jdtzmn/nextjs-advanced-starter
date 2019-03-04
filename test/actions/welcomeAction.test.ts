import { welcomeAction } from 'actions/welcomeAction'
import { INCREMENT } from 'actions/types'

describe('welcomeAction', () => {
  it('should create an action to increment count', () => {
    const expectedAction = { type: INCREMENT }
    expect(welcomeAction()).toEqual(expectedAction)
  })
})

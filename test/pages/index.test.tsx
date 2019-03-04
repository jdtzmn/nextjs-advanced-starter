import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import { Index } from 'pages/index'
import createStore from '@/store'

const store = createStore()

describe('Index', () => {
  const mockIncrement = jest.fn()
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<Index
      count={0}
      increment={mockIncrement}
      store={store}
      theme={{}}
    />)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call increment on button click', () => {
    wrapper
      .find('incrementButton')
      .simulate('click')
    expect(mockIncrement).toHaveBeenCalled()
  })

  it('should render the count number', () => {
    wrapper.setProps({ count: 1 })
    expect(wrapper.find('count').text()).toBe('1')
  })
})

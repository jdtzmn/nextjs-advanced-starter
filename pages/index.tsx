import * as React from 'react'
import { Store } from 'redux'
import styled from 'styled-components'
import { connectIndexContainer } from '../containers'

const Title = styled.h1`
  padding-top: 50px;
  text-align: center;
`

const Count = styled.p`
  font-size: 20px;
  text-align: center;
`
Count.displayName = 'count'

const Button = styled.button`
  color: white;
  background: rgb(0, 122, 255);
  display: block;
  margin: 0 auto;
  padding: 16px;
  font-size: 16px;
  outline: none;
  border: 0;
  border-radius: 4px;

  &:hover {
    background: rgba(0, 122, 255, 0.8);
  }
`
Button.displayName = 'incrementButton'

export interface IndexProps {
  count: number,
  increment: () => any,
  store: Store,
  theme: object
}

export class Index extends React.Component<IndexProps> {
  render () {
    const { count, increment } = this.props

    return (
      <div>
        <Title>nextjs-advanced-starter</Title>
        <Count>{count}</Count>
        <Button onClick={increment}>Click To Increment</Button>
      </div>
    )
  }
}

export default connectIndexContainer(Index)

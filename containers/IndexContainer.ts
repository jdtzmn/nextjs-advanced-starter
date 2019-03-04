import React from 'react'
import { connect } from 'react-redux'
import { welcomeAction } from '../actions'
import { WelcomeState } from '../reducers/welcomeReducer'

const mapStateToProps = (state): WelcomeState => ({
  count: state.welcome.count
})

interface WithoutCount {
  increment: () => any
}

const mapDispatchToProps = (dispatch): WithoutCount => ({
  increment: async () => dispatch(welcomeAction())
})

export const connectIndexContainer = (component): React.Component => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component)
}

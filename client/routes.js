import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {WelcomePage, Intro, How} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route path="/whyIneedAjob" component={WelcomePage} />
        <Route path="/home" component={Intro} />
        <Route path="/how" component={How} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes

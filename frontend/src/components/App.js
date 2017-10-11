import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home';
import NewPost from './NewPost'
import { connect } from 'react-redux'
import { fetchAllCategories } from '../actions/categoryAction'


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAllCategories())
  }

  render() {

    return (

        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/new" component={NewPost}/>
          </Switch>
        </div>
    )
  }
}

function mapStateToProps( {categories} ) {
  console.log("categories :", categories)
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps)(App))

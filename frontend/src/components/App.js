import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home';
import FormPost from './FormPost'
import PostDetail from './PostDetail'
import { connect } from 'react-redux'
import { fetchAllCategories } from '../actions/categoryActions'


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
            <Route exact path="/new" component={FormPost}/>
            <Route exact path="/edit/:postId" component={FormPost}/>
            <Route exact path="/:category" component={Home}/>
            <Route exact path="/:category/:postId" component={PostDetail}/>
          </Switch>
        </div>
    )
  }
}

function mapStateToProps( {categories} ) {
  return {
    categories
  }
}

export default withRouter(connect(mapStateToProps)(App))

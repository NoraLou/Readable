import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './Home';
import NewPost from './NewPost'
import PostDetail from './PostDetail'
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

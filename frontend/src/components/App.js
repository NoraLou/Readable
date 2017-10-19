import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
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
          <nav className="main-nav" >
            <div className="container">
              <Link to="/"><h1>Readable</h1></Link>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/new" component={FormPost}/>
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

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home';
import NewPost from './NewPost'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions/postAction'
import { fetchAllCategories } from '../actions/categoryAction'


class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Home }/>
        <Route exact path="/new" component={ NewPost }/>
      </div>
    )
  }
}

export default App

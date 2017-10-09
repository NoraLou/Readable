import React, { Component } from 'react';
// import MdThumbDown from 'react-icons/lib/md/thumb-down';
// import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { Route } from 'react-router-dom'
import Header from './common/Header';
import Home from './Home';
import * as API from './../utils/api.js'
// import {connect} from 'react-redux'
import  PostDetail from './PostDetail'
import  NewPost from './NewPost'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      sortBy: 'voteScore',
      categories: []
    }
  }

  componentDidMount() {
    API.fetchAllPosts().then((posts) => {
      console.log("posts :", posts)
      this.setState({posts});
    })

    API.fetchAllCategories().then((categories) => {
      this.setState({categories})
      // console.log(this.state)
    })
  }

  render() {

    return (

      <div className="App">
        <Route exact path="/" render={ () => (
          <Home posts={this.state.posts} />
        )}>
        </Route>
        <Route exact path="/new" component={ NewPost }/>
      </div>

    )
  }
}

export default App;

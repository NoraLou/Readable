import React, { Component } from 'react';
// import MdThumbDown from 'react-icons/lib/md/thumb-down';
// import MdThumbUp from 'react-icons/lib/md/thumb-up';
import Header from './common/Header';
import Home from './Home';
// import {addPost} from '../actions'
import * as API from './../utils/api.js'
// import {connect} from 'react-redux'


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
        <Header />
        <Home posts={this.state.posts} sortBy={this.state.sortBy}/>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { fetchAllPosts } from '../utils/api.js';
import Header from './common/Header';
import Home from './Home';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      sortBy: 'voteScore'
    }
  }

  componentDidMount() {
    fetchAllPosts().then((posts) => {
      console.log("posts :", posts)
      this.setState({posts});
      console.log('this.state.posts', this.state.posts)
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

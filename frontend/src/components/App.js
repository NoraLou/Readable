import React, { Component } from 'react';
// import MdThumbDown from 'react-icons/lib/md/thumb-down';
// import MdThumbUp from 'react-icons/lib/md/thumb-up';
import Header from './common/Header';
// import Home from './Home';
// import {addPost} from '../actions'
import * as API from './../utils/api.js'
// import {connect} from 'react-redux'


const testPost = {
  title: 'Redux is hard',
  body: 'I hope I can truly understand it',
  author: 'Nora',
  category: 'redux'
}

function testAPI() {
  console.log("setTimeout is done *********************!")
  API.fetchAllPosts().then((posts) => {
    console.log("posts :", posts)
  })
}

API.addPost(testPost)

setTimeout(testAPI, 10000)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      sortBy: 'voteScore',
      categories: []
    }
  }



  // componentDidMount() {
  //   API.fetchAllPosts().then((posts) => {
  //     console.log("posts :", posts)
  //     // this.setState({posts});
  //     // console.log('this.state.posts', this.state.posts)
  //   })

  //   // API.fetchAllCategories().then((categories) => {
  //   //   this.setState({categories})
  //   //   // console.log(this.state)
  //   // })

  //   // API.addPost(testPost)

  // }

  render() {
    return (
      <div className="App">
        <Header />
        {/*<Home posts={this.state.posts} sortBy={this.state.sortBy}/>*/}
      </div>
    )
  }
}

export default App;

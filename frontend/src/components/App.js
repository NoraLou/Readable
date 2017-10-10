import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home';
import PostDetail from './PostDetail'
import NewPost from './NewPost'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions/postAction'
import { fetchAllCategories } from '../actions/categoryAction'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sortByMethod: 'voteScore',
    }
  }

  componentDidMount() {

    const { dispatchBoundGetAllPosts, dispatchBoundGetAllCategories } = this.props
    dispatchBoundGetAllPosts()
    dispatchBoundGetAllCategories()
  }

  render() {
    console.log("Props :", this.props)

    return (

      <div className="App">
        Hello {this.props.name}
      </div>

    )
  }
}

// function mapStateToProps({ posts, categories} ) {
//   return {
//     posts : 'test',
//     categories: 'test'
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    dispatchBoundGetAllPosts : (data) => dispatch(fetchAllPosts()),
    dispatchBoundGetAllCategories : (data) => dispatch(fetchAllCategories()),
  }
}

export default connect(null, mapDispatchToProps)(App);

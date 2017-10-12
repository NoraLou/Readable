import React, { Component } from 'react';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdChatBubbleOutline from 'react-icons/lib/md/chat-bubble-outline';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchAllPosts, postVoteChange } from '../actions/postAction'
import { Link } from 'react-router-dom'
// import { fetchAllPosts } from '../utils/postAPI.js'

class Home extends Component {

    state = {
      sortBy : this.voteSort
    }

    componentDidMount() {
      this.props.dispatch(fetchAllPosts())
    }

    voteSort = (a, b) => {
      return b.voteScore - a.voteScore
    }

    dateSort = (a, b) => {
      if (a.timestamp - b.timestamp  === 0 ) {
        return a
      } else {
        return a.timestamp > b.timestamp ? a.timestamp : b.timestamp
      }
    }

    upVote = (id) => {
      this.props.dispatch(postVoteChange(id, "upVote"))
    }

    downVote = (id) => {
      this.props.dispatch(postVoteChange(id, "downVote"))
    }

  render() {

    const { posts, categories } = this.props

    return (
      <div>
        HEllo


      </div>
    )
  }
}


function mapStateToProps({ posts, categories} ) {

  return {
    posts : Object.keys(posts).map(key => posts[key]),
    categories: [ {name:"all", path:'/'} , ...categories ]
  }
}


export default connect(mapStateToProps)(Home)




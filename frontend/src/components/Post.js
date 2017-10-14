import React, { Component } from 'react';
import { Alert, Col, Button, Row, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
// import { postAddPost } from '../actions/postAction'

class Post extends Component {


}


function mapStateToProps({ posts, categories }) {

  return {
    posts : Object.keys(posts).map(key => posts[key])
  }
}


export default connect(mapStateToProps)(Post)

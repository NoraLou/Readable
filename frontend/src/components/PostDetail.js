import React, { Component } from 'react'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getPost } from '../actions/postActions'
import { connect } from 'react-redux'
import ListComments  from './ListComments'


class PostDetail extends Component {



  componentDidMount() {
    if (this.props.match.params.postId) {
      const postId = this.props.match.params.postId
      this.props.dispatch(getPost(postId))
    }
  }

  componentWillReceiveProps( nextProps ) {
    if (nextProps.match.params.postId !== this.props.match.params.postId) {
      const newId = nextProps.match.params.postId
      this.props.newId(getPost(newId))
    }

  }

  render() {

    const { posts , comments } = this.props
    const { postId } = this.props.match.params
    let commentCount = Object.keys(comments).length

    const foundID = posts.filter((post) => post.id === postId)
    let post = foundID.length ? foundID[0] : {}

    return (

      <div>
        <nav className="main-nav">
          <Grid>
            <Row>
              <Col xs={12} sm={4}>
                <h1>Readable</h1>
              </Col>
            </Row>
          </Grid>
        </nav>

        <Grid className="post-item-detail">
          <Row className="card">
            <Col xs={2} className="card-grid-item">
              <div className="content voting" >
                <div>
                  <span className="icon-wrap">
                    <MdThumbUp size={25}/>
                  </span>
                    <div>25</div>
                  <span className="icon-wrap">
                    <MdThumbDown size={25}/>
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={10} className="card-grid-item">
              <Row>
                <Col xs={12} sm={8}>
                  <h2>{post.title}</h2>
                </Col>
                <Col xs={12} sm={4}>
                  <div className="edit-controls">
                    <Link to={`/edit/${post.id}`}><a href="/new">Edit</a></Link>
                    <a>Delete</a>
                  </div>
                </Col>
               </Row>
               <Row>
                <Col xs={12} sm={8}>
                  <h4 className="content">{post.author}<span>{post.formattedDate}</span></h4>
                </Col>
                <Col xs={12} sm={4}>
                  <h4 className="content">Comments:{commentCount}</h4>
                </Col>
               </Row>
               <Row>
                <Col xs={12}>
                  <p className="content">{post.body}</p>
                </Col>
               </Row>
            </Col>
          </Row>
        </Grid>

        <ListComments parentId={postId}/>
      </div>
    )
  }
}

function mapStateToProps({ posts, comments}) {

  return {
    posts: Object.keys(posts).map(key => posts[key]),
    comments,
  }

}

export default connect(mapStateToProps)(PostDetail)


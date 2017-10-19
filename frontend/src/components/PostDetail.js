import React, { Component } from 'react'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import { Grid, Row, Col, Button, Modal, Alert} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { getPost, deletePost } from '../actions/postActions'
import { connect } from 'react-redux'
import ListComments  from './ListComments'
import FormPost from './FormPost'


class PostDetail extends Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  state = {
    showModal: false,
    setDelete: false
  }

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

  handleAlertDismiss = (e) => {

  }

  handlePostDelete = (e) => {
    e.preventDefault()
    const postId = this.props.match.params.postId
    if ( postId ) {
      this.props.dispatch(deletePost(postId))
      this.setState(() => ({ setDelete: true }))
    }
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
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

          { ( this.state.setDelete || post.deleted ) &&
            <Redirect to='/'/>
          }

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
                    <a onClick ={()=> this.setState({ showModal : true }) }> Edit </a>
                    <a onClick={this.handlePostDelete}>Delete</a>
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

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <FormPost edit post={post}/>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>

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


import React, { Component } from 'react'
import { Grid, Row, Col, Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchPostComments, deletePostComment, addComment } from '../actions/commentActions'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import { Link } from 'react-router-dom'
import FormComments from './FormComments'


class ListComments extends Component {

  constructor(props) {
    super(props);
    this.closeCommentsModal = this.closeCommentsModal.bind(this)
    this.openCommentsModal = this.openCommentsModal.bind(this)
  }

  state = {
    sortBy : this.voteSort,
    showCommentsModal: false
  }

  componentDidMount() {
    this.props.dispatch(fetchPostComments(this.props.parentId))
  }

  openCommentsModal = () => {
    this.setState( ()=> ({showCommentsModal : true}))
  }

  closeCommentsModal = () => {
    this.setState( ()=> ({showCommentsModal : false}))
  }

  voteSort = (a, b) => {
    return b.voteScore - a.voteScore
  }

  handleCommentDelete = (id) => {
    this.props.dispatch(deletePostComment(id))
  }

  dateSort = (a, b) => {
    if (a.timestamp - b.timestamp  === 0 ) {
        return a
      } else {
        return a.timestamp > b.timestamp ? a.timestamp : b.timestamp
    }
  }

  render() {
    const { comments, parentId } = this.props

    return (
      <div>
        <Grid style={{paddingBottom:'20'}}>
          <Row>
            <Col xs={6}>
              <div>SORT BY :</div>
              <a href="#score" onClick={() => this.setState( {sortBy: this.voteSort} )}> Score </a>
              <a href="#date" onClick={() => this.setState( {sortBy: this.dateSort} )}> Date </a>
            </Col>
            <Col xs={6}>
              <div className="pull-right">
                <Button onClick={this.openCommentsModal}>NEW COMMENT</Button>
              </div>
            </Col>
          </Row>
        </Grid>

        <Grid className="card-list">
          {comments.sort(this.state.sortBy).map((comment, idx) =>
            <Row className="card" key={idx}>
              <Col xs={2} className="card-grid">
                <div className="content voting">
                  <div>
                    <span className="icon-wrap">
                      <MdThumbUp size={25}/>
                    </span>
                      <div>{comment.voteScore}</div>
                    <span className="icon-wrap">
                      <MdThumbDown size={25}/>
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={10} className="card-grid">
                <Row>
                  <Col xs={8}>
                    <h5>{comment.formattedDate}</h5>
                  </Col>
                  <Col xs={4}>
                    <h5 className="edit-controls text-right">
                      <a href="/new">Edit</a>
                      <a onClick={ ()=>this.handleCommentDelete(comment.id)}>Delete</a>
                    </h5>
                  </Col>
                </Row>
                <Col xs={12}>
                  <h4>{comment.author}</h4>
                  <p>{comment.body}</p>
                </Col>
              </Col>
            </Row>
          )}
        </Grid>

        <Modal show={this.state.showModal} onHide={this.closeCommentsModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Comment</Modal.Title>
          </Modal.Header>
          <FormComments parentId={parentId}/>
          <Modal.Footer>
            <Button onClick={this.closeCommentsModal}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>

    );
  }
}

function mapStateToProps({ comments }) {

  return {
    comments: Object.keys(comments).map(key => comments[key]),
  }
}


export default connect(mapStateToProps)(ListComments)


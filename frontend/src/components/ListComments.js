import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchPostComments, deletePostComment, postVoteChange } from '../actions/commentActions'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import FormModalComments from './FormModalComments'


class ListComments extends Component {

  constructor(props) {
    super(props);
    this.closeCommentModal = this.closeCommentModal.bind(this)
    this.openCommentModal = this.openCommentModal.bind(this)
  }

  state = {
    sortBy : this.voteSort,
    showCommentModal: false,
    inEdit: false,
  }

  componentDidMount() {
    this.props.dispatch(fetchPostComments(this.props.parentId))
  }

  openCommentModal = () => {
    this.setState( ()=> ({showCommentModal : true}))
  }

  closeCommentModal = () => {
    this.setState( ()=> ({showCommentModal : false}))
  }

  upVote = (id) => {
    this.props.dispatch(postVoteChange(id, "upVote"))
  }

  downVote = (id) => {
    this.props.dispatch(postVoteChange(id, "downVote"))
  }

  voteSort(a, b){
    return b.voteScore - a.voteScore
  }

  handleCommentDelete = (id) => {
    this.props.dispatch(deletePostComment(id))
  }

  handleNewComment = () => {
    this.setState(()=>({
      inEdit: false,
      showCommentModal: true
    }))
  }

  handleCommentEdit = (comment) => {
    this.setState(()=>({
      inEdit: comment,
      showCommentModal: true
    }))
  }

  dateSort(a, b){
    if (a.timestamp - b.timestamp  === 0 ) {
        return a
      } else {
        return a.timestamp > b.timestamp ? -1 : 1
    }
  }

  render() {

    const { comments, parentId } = this.props

    return (
      <div>
        <Grid className="list-actions">
          <Row>
            <Col xs={6}>
              <div>SORT BY :</div>
              <a href="#score" onClick={() => this.setState( {sortBy: this.voteSort} )}> Score </a>
              <a href="#date" onClick={() => this.setState( {sortBy: this.dateSort} )}> Date </a>
            </Col>
            <Col xs={6}>
              <div className="pull-right">
                <Button onClick={this.handleNewComment}>NEW COMMENT</Button>
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
                    <span className="icon-wrap" onClick={()=> {this.upVote(comment.id)}}>
                      <MdThumbUp size={25}/>
                    </span>
                      <div>{comment.voteScore}</div>
                    <span className="icon-wrap" onClick={()=> {this.downVote(comment.id)}} >
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
                      <a onClick={ ()=>this.handleCommentEdit(comment)}>Edit</a>
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

        <FormModalComments inEdit={this.state.inEdit} showModal={this.state.showCommentModal} parentId={parentId} closeModal={this.closeCommentModal} />
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


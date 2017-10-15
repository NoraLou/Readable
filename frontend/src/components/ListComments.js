import React, { Component } from 'react'
import { Grid, Row, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchPostComments } from '../actions/commentActions'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import { voteSort, dateSort } from '../utils/helpers'
import { Link } from 'react-router-dom'


class ListComments extends Component {

  state = {
    sortBy : this.voteSort
  }

  componentDidMount() {
    // if (this.props.match.params.postId) {
    //   const postId = this.props.match.params.postId
    //   this.props.dispatch(fetchPostComments(postId))
    // }
  }

  render() {

    const { comments } = this.props

    console.log("List Comments this.props :", this.props)

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
                <Link to="/new">
                  <Button>NEW COMMENT</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Grid>

        <Grid className="card-list">
          {this.props.comments.map( comment =>
            <Row className="card" key={comment.id}>
              <Col xs={2} className="card-grid">
                <div className="content voting">
                  <div>
                    <span className="icon-wrap">
                      <MdThumbUp size={25}/>
                    </span>
                      <div>voteScore</div>
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
                      <a>Delete</a>
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


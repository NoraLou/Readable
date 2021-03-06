import React, { Component } from 'react'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchAllPosts, postVoteChange } from '../actions/postActions'
import { Link } from 'react-router-dom'


class Home extends Component {

    state = {
      sortBy : this.voteSort
    }

    componentDidMount() {
      if (this.props.match.params.category) {
        let currCategory = this.props.match.params.category
        this.props.dispatch(fetchAllPosts(currCategory))
      } else {
        this.props.dispatch(fetchAllPosts())
      }
    }

    componentWillReceiveProps( nextProps ) {
      if (nextProps.match.params.category !== this.props.match.params.category) {
        const { dispatch } = nextProps
        const  newCategory = nextProps.match.params.category
        dispatch(fetchAllPosts(newCategory))
      }
    }

    voteSort(a, b){
      return b.voteScore - a.voteScore
    }

    dateSort(a, b){
      if (a.timestamp - b.timestamp  === 0 ) {
        return a
      } else {
        return a.timestamp > b.timestamp ? -1 : 1
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
        <Grid className="list-actions">
          <Row>
            <Col xs={12}>
              <div className='category-buttons pull-right'>
                {categories.map((cat, idx) =>
                  <Link key={idx} to={cat.path}>
                    <Button>{cat.name}</Button>
                  </Link>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div>SORT BY :</div>
              <a href="#score" onClick={() => this.setState( {sortBy: this.voteSort} )}> Score </a>
              <a href="#date" onClick={() => this.setState( {sortBy: this.dateSort} )}> Date </a>
            </Col>
            <Col xs={6}>
              <div className="pull-right">
                <Link to="/new">
                  <Button>NEW POST</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Grid>

        <Grid className="card-list">
          {posts.sort(this.state.sortBy).map((post) => (
            <Row className="card" key={post.id}>
              <Col xs={2} className="card-grid">
                <div className="content voting">
                  <div>
                    <span className="icon-wrap" onClick={()=> {this.upVote(post.id)}}>
                      <MdThumbUp size={25}/>
                    </span>
                      <div>{post.voteScore}</div>
                    <span className="icon-wrap" onClick={()=> {this.downVote(post.id)}}>
                      <MdThumbDown size={25}/>
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={10} className="card-grid">
                <Row>
                  <Col xs={8}>
                    <Link to={`${post.category}/${post.id}`}>
                      <h4>{post.title}</h4>
                    </Link>
                  </Col>
                </Row>
                <Col xs={12} className="card-details">
                  <span>{post.formattedDate}</span><span>{post.author}</span><span className="pull-right">Comments :{post.commentCount}</span>
                  <p>{post.body}</p>
                </Col>
              </Col>
            </Row>
          ))}
        </Grid>

      </div>
    )
  }
}


function mapStateToProps({ posts, categories }) {

  return {
    posts : Object.keys(posts).map(key => posts[key]),
    categories: [ {name:"all", path:'/'} , ...categories ]

  }
}


export default connect(mapStateToProps)(Home)




import React, { Component } from 'react'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdChatBubbleOutline from 'react-icons/lib/md/chat-bubble-outline'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchAllPosts, postVoteChange } from '../actions/postAction'
import { Link } from 'react-router-dom'


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

        <nav className="home-nav" style={{backgroundColor:"darkgrey", minHeight:"60", color:"white", lineHeight:"70px", verticalAlign: 'middle'}}>
          <Grid>
            <Row>
              <Col xs={12} sm={4}>
                <h1>Readable</h1>
              </Col>
              <Col xs={12} sm={8}>
                <div className='category-buttons pull-right'>
                  {categories.map((cat) =>
                    <Link key={cat.name} to={cat.path}>
                      <Button>{cat.name}</Button>
                    </Link>
                  )}
                </div>
              </Col>
            </Row>
          </Grid>
        </nav>

        <Grid style={{paddingTop:'20'}}>

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

        <Grid className="post-list">
          {posts.sort(this.state.sortBy).map((post) => (
            <Row className="post-card" key={post.id}>
              <Col xs={8} className="post-grid-item">
                <div className="content">
                  <span>{post.title}</span><span className="pull-right">Comments :<span className="comment-count">{post.commentCount}</span></span>
                  <div className="post-details">
                    <span>{post.formattedDate}</span><span>{post.author}</span>
                  </div>
                    {post.body}
                </div>
              </Col>
              <Col xs={4} className="post-grid-item">
                <div className="content voting">
                  <div>
                    <div>{post.voteScore}</div>
                    <span className="icon-wrap" onClick={()=> {this.upVote(post.id)}}>
                      <MdThumbUp size={30}/>
                    </span>
                    <span className="icon-wrap" onClick={()=> {this.downVote(post.id)}}>
                      <MdThumbDown size={30}/>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Grid>
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




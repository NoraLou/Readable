import React, { Component } from 'react';
//import { FormControl } from 'react-bootstrap';
//import { ListPosts } from './ListPosts';

import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { Button, MenuItem, Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        sortBy : this.voteSort
      }
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

  render() {

    const { posts } = this.props

    const postsReadableDate = posts.map( post  => {
      let date = new Date (post.timestamp)
      let formatDate = date.toDateString()
      return {
        ...post,
        ['formatDate'] : formatDate
      }
    })

    console.log('postsReadableDate', postsReadableDate)

    console.log('this.props :', this.props)

    return (

      <div>

        <div className='container'>
          <div>SORT BY :</div>
          <a href="#score" onClick={() => this.setState( {sortBy: this.voteSort} )}> Score </a>
          <a href="#date" onClick={() => this.setState( {sortBy: this.dateSort} )}> Date </a>
        </div>
        <Grid className="post-list">
          {postsReadableDate.sort(this.state.sortBy).map((post) => (
            <Row className="post-card" key={post.id}>
              <Col xs={8} className="post-grid-item">
                <div className="content">
                  <div>{post.title}</div>
                  <div className="post-details">
                    <span>{post.formatDate}</span><span>{post.author}</span>
                  </div>
                    {post.body}
                </div>
              </Col>
              <Col xs={4} className="post-grid-item">
                <div className="content voting">
                  <div>
                    <div>{post.voteScore}</div>
                    <span className="icon-wrap">
                      <MdThumbUp size={30}/>
                    </span>
                    <span className="icon-wrap">
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

export default Home;


import React, { Component } from 'react';
//import { FormControl } from 'react-bootstrap';
//import { ListPosts } from './ListPosts';

import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { Grid, Row, Col, Button } from 'react-bootstrap';

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
        formatDate
      }
    })


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
                  <Button>All</Button>
                  <Button>React</Button>
                  <Button>Redux</Button>
                  <Button>Udacity</Button>
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
                <Button>NEW POST</Button>
              </div>
            </Col>
          </Row>
        </Grid>


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


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

    test = [
    {id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false},

    {id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false},

    {id: '8jsdjhfd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 3,
    deleted: false},

    {id: 'dd253nd',
    timestamp: 1507235633036,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 1,
    deleted: false},

    {id: 'zdd253nd',
    timestamp: 1507235733680,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: -22,
    deleted: false},
  ]


  sortByOptions = ['Vote Score', 'Date']

// <ListGroupItem header={title} onClick={(evt) => props.navToPost(evt, post.id, categoryName)}>

  render() {

    const { posts } = this.props

    const postsReadableDate = this.test.map( post  => {
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
          <a href="#voteScore" onClick={() => this.setState(this.state.sortBy: 'voteScore')}> Vote Score </a>
          <a href="#date" onClick={() => this.setState(this.state.sortBy: 'voteScore')}> Date </a>
        </div>

        <Grid className="post-list">
          {postsReadableDate.sort(this.dateSort).map((post) => (
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


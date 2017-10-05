import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
//import { ListPosts } from './ListPosts';

import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { MenuItem, Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        sortBy :'voteScore'
      }
    }



  posts = [
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
  ]

  groupSelect = (e) => {
    console.log(e)
    {/*https://stackoverflow.com/questions/42446542/react-bootstrap-set-value-of-formcontrol-select*/}
  }

  sortByOptions = ['Vote Score', 'Date']

// <ListGroupItem header={title} onClick={(evt) => props.navToPost(evt, post.id, categoryName)}>

  render() {

    const { posts } = this.props
    console.log('this.props :', this.props)

    return (

      <div>

        <div className='container'>
          <FormControl componentClass="select" placeholder="Group" value={this.state.sortBy}>
            inputRef={ref => { this.groupSelect = ref; }}
            onChange={this.groupSelect}>
            <option value="voteScore">Vote Score</option>
            <option value="date">Date</option>
          </FormControl>
        </div>

        <Grid className="post-list">
          <Row className="post-card">
            <Col xs={8} className="post-grid-item">
              <div className="content">
                <div>Learn Redux in 10 minutes!</div>
                <div className="post-details">
                  <span>Date</span><span>User</span>
                </div>
                lkdjflskjflkja d lisdjflk liadkklskdjflkjsldkfj
                lksjflak lkj lk lkadjfkjalkdsjf
              </div>
            </Col>
            <Col xs={4} className="post-grid-item">
              <div className="content voting">
                <div>
                  <span className="icon-wrap">
                    <MdThumbUp size={30}/>
                    <div className="vote-total">14</div>
                  </span>
                  <span className="icon-wrap">
                    <MdThumbDown size={30}/>
                    <div className="vote-total">3</div>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>

      </div>

    )
  }
}

export default Home;


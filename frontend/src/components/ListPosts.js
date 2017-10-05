import React, { Component } from 'react';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { MenuItem, Grid, Row, Col } from 'react-bootstrap';


class ListPosts extends Component {

  render() {

    return (

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

    )
  }
}

export default ListPosts;

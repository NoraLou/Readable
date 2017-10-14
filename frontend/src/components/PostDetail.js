import React, { Component } from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdCreate from 'react-icons/lib/md/create'
import MdThumbDown from 'react-icons/lib/md/thumb-down'
import MdThumbUp from 'react-icons/lib/md/thumb-up'
import MdAdd from 'react-icons/lib/md/add'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class PostDetail extends Component {
  render() {

    return (

      <div>
        <nav className="main-nav">
          <Grid>
            <Row>
              <Col xs={12} sm={4}>
                <h1>Readable</h1>
              </Col>
            </Row>
          </Grid>
        </nav>

        <Grid className="post-item-detail">
          <Row className="card">
            <Col xs={2} className="card-grid-item">
              <div className="content voting" >
                <div>
                  <span className="icon-wrap">
                    <MdThumbUp size={25}/>
                  </span>
                    <div>25</div>
                  <span className="icon-wrap">
                    <MdThumbDown size={25}/>
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={10} className="card-grid-item">
              <Row>
                <Col xs={12} sm={8}>
                  <h2>I am the title!!!</h2>
                </Col>
                <Col xs={12} sm={4}>
                  <div className="edit-controls">
                    <a href="/new">Edit</a>
                    <a>Delete</a>
                  </div>
                </Col>
               </Row>
               <Row>
                <Col xs={12} sm={8}>
                  <h4 className="content">By Author <span> at date</span></h4>
                </Col>
                <Col xs={12} sm={4}>
                  <h4 className="content">Comments:10</h4>
                </Col>
               </Row>
               <Row>
                <Col xs={12}>
                  <p className="content"> lsfhlaskhfjsa fhkjsdhf   adlfkjalskdfjlkajf  sdjfhsj  kjshdfk  kajdhfkjhadjhkj kjdh </p>
                </Col>
               </Row>
            </Col>
          </Row>
        </Grid>

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
            <Row className="card">
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
                    <h4>Title</h4>
                  </Col>
                  <Col xs={4}>
                    <h5 className="edit-controls text-right">
                      <a href="/new">Edit</a>
                      <a>Delete</a>
                    </h5>
                  </Col>
                </Row>
                <Col xs={12}>
                  <span>formattedDate</span><span>author</span><span className="pull-right">Comments: 13</span>
                  <p>lksjfla sdlf  lkjsdf al   lakjdf alkdj lkjdflkj alksdj lkj f</p>
                </Col>
              </Col>
            </Row>

            <Row className="card">
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
                    <h4>Title</h4>
                  </Col>
                  <Col xs={4}>
                    <h5 className="edit-controls text-right">
                      <a href="/new">Edit</a>
                      <a>Delete</a>
                    </h5>
                  </Col>
                </Row>
                <Col xs={12}>
                  <span>formattedDate</span><span>author</span><span className="pull-right">Comments: 13</span>
                  <p>lksjfla sdlf  lkjsdf al   lakjdf alkdj lkjdflkj alksdj lkj f</p>
                </Col>
              </Col>
            </Row>

        </Grid>




      </div>

    )
  }
}

export default PostDetail


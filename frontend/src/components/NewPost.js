import React, { Component } from 'react';
import {Col, Button, Row, Grid, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'


class NewPost extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div className="container" style={{paddingTop: 60}}>
        <form>

          <FormGroup
            controlId="readable-title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Post Title"/>

            <FormControl.Feedback/>
            <HelpBlock>You should pust some validation in here</HelpBlock>
          </FormGroup>

          <FormGroup
            controlId="readable-post-body">
            <ControlLabel>Body</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter Post Title"/>
            <FormControl.Feedback/>
            <HelpBlock>You should pust some validation in here</HelpBlock>
          </FormGroup>

          <Row>
            <Col xs={12} sm={6}>
              <FormGroup
                controlId="readable-author">
                <ControlLabel>Author</ControlLabel>
                <FormControl
                  type="tex"
                  placeholder="Enter Post Title"/>
                <FormControl.Feedback/>
                <HelpBlock>You should pust some validation in here</HelpBlock>
              </FormGroup>
            </Col>

            <Col xs={12} sm={6}>
              <FormGroup
                controlId="readable-select-category">
                <ControlLabel>Seleect Category</ControlLabel>

                <FormControl
                  componentClass="select"
                  placeholder="Enter Post Title">
                    <option value="select">select (multiple)</option>
                    <option value="other">...</option>
                </FormControl>

                <FormControl.Feedback/>
                <HelpBlock>You should pust some validation in here</HelpBlock>
              </FormGroup>
            </Col>
          </Row>

          <Row className="text-center">
            <Col xs={6}>
              <div><Button>Cancel</Button></div>
            </Col>
              <div><Button>Save</Button></div>
            <Col xs={6}>
            </Col>
          </Row>

        </form>
      </div>
    )
  }

}

export default NewPost


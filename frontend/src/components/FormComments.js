import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Grid, Row, Col, Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { addComment } from '../actions/commentActions'

const defaultComment = {
  body:'',
  author:'',
  isValid: true,
  isEdit: false,
  isSubmitted: false
}

class FormComments extends Component {

  state = {
    ...defaultComment
  }

  fieldChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  isValid = (comment) => {
    for ( let prop in comment) {
      console.log("testing with prop ", prop, "at value :", comment[prop])
      if (comment[prop] === '' || comment[prop] === undefined) {
        return false
      }
    }
    return true
  }

  submitComment = (e) => {
    const { parentId } = this.props
    const { author, body, isEdit} = this.state
    console.log("submit with ", author, body)

    if (this.isValid( { author, body } )){
      console.log('valid****!')
      this.setState({
        ...defaultComment,
        isSubmitted: true
      })
      this.props.dispatch(addComment({ parentId, author, body }))
    } else {
      console.log('not valid')
      this.setState(()=>({
        isSubmitted: true,
        isValid: false
      }))
    }
  }

  handleAlertDismiss = (e) => {
    this.setState({
     formValid: true,
     isSubmitted: false
    })
  }

  render () {

    return (

      <div className="container" style={{paddingTop: 60}}>

        {( !this.state.isValid && this.state.isSubmitted) && (
          <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
            <h4 className="text-center">Oops!! Each field needs a value.</h4>
          </Alert>
        )}
        {(this.state.isValid && this.state.isSubmitted) && (
          <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
            <h4 className="text-center">Great!!! Submitted.</h4>
          </Alert>
        )}

        <form>
          <Grid>
            <Row>
              <Col xs={12}>
                <FormGroup
                  controlId="comment-body">
                  <ControlLabel>Body</ControlLabel>
                  <FormControl
                    name="body"
                    value={this.state.body}
                    type="text"
                    componentClass="textarea"
                    placeholder="Enter Comment"
                    onChange={this.fieldChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <FormGroup
                  controlId="comment-title">
                  <ControlLabel>Author</ControlLabel>
                  <FormControl
                    name="author"
                    value={this.state.author}
                    type="text"
                    placeholder="Enter Author"
                    onChange={this.fieldChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Row className="text-center">
              <Col xs={6}>
                <Button onClick={this.submitComment}>SAVE</Button>
              </Col>
              <Col xs={6}>
                <Button>CANCEL</Button>
              </Col>
            </Row>
          </Grid>
        </form>
      </div>
    )
  }
}


function mapStateToProps({ comments }) {

  return {
    comments: Object.keys(comments).map(key => comments[key]),
  }
}


export default connect(mapStateToProps)(FormComments)

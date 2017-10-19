import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, Grid, Row, Col, Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { addComment, editComment } from '../actions/commentActions'

const defaultComment = {
  body:'',
  author:'',
  isValid: true,
  isSubmitted: false,
  disableField: false,
}

class FormModalComments extends Component {

  state = {
    ...defaultComment
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.inEdit != this.props.inEdit ) {
      if (nextProps.inEdit) {
        const { body, author } = nextProps.inEdit
        this.setState(()=>({
          body,
          author,
          disableField: true
        }))
      } else {
        this.setState(()=>({
          ...defaultComment
        }))
      }
    }
  }

  fieldChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  isValid = (comment) => {
    for ( let prop in comment) {
      if (comment[prop] === '' || comment[prop] === undefined) {
        return false
      }
    }
    return true
  }

  resetModal = (e) => {
    const { inEdit } = this.props
    if (inEdit) {
      const { body, author } = inEdit
      this.setState(()=>({
        body,
        author,
        disableField: true
      }))
    } else {
    this.setState(()=> ({...defaultComment}))
    }
  }

  handleUpdate = (body) => {
    const { id } = this.props.inEdit
    this.props.dispatch(editComment( id, body ))
  }

  handleAdd = (author, body, parentId) => {
    this.props.dispatch(addComment( {author, body, parentId } ))
  }

  submitComment = (e) => {

    const { parentId, inEdit } = this.props
    const { author, body} = this.state

    if (this.isValid( { author, body } )){
      this.setState({
        isSubmitted: true
      })

      inEdit ? this.handleUpdate(body) : this.handleAdd(author, body, parentId)
      setTimeout(()=> {
        this.setState( () => ({ ...defaultComment}))
        this.props.closeModal()
      }, 1000)

    } else {
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

    const { showModal , closeModal, inEdit } = this.props

    return (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              { inEdit === false
                ? <h4>Add Comment</h4>
                : <h4>Edit Comment</h4> }
            </Modal.Title>
          </Modal.Header>
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
                        readOnly={this.state.disableField}
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
                    <Button onClick={this.resetModal}>CANCEL</Button>
                  </Col>
                </Row>
              </Grid>
            </form>
          </div>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}


function mapStateToProps({ comments }) {

  return {
    comments: Object.keys(comments).map(key => comments[key]),
  }
}


export default connect(mapStateToProps)(FormModalComments)

import React, { Component } from 'react';
import { Alert, Col, Button, Row, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { postAddPost, editPost } from '../actions/postActions'


const defaultNewState = {
  title:'',
  author:'',
  category:'none selected',
  body:'',
  formValid: true,
  isEdit: false,
  isSubmitted: false
}

class FormPost extends Component {

  state = {
    ...defaultNewState
  }

  componentDidMount() {
    if (this.props.post) {
      this.setState({
        ...this.props.post,
        isEdit: true
      })
    }
  }

  resetForm = (e) => {
    this.setState({ ...defaultNewState })
  }

  fieldChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  isValid = (post) => {
    for ( let prop in post) {
      if (post[prop] === '' || post[prop] === 'none selected' || post[prop] === undefined) {
        return false
      }
    }
    return true
  }

  submitPost = (e) => {
    const { title, author, body, category, isEdit} = this.state
    const { dispatch } = this.props

    if(this.isValid({ title, author, body, category})) {
      this.setState({
        ...defaultNewState,
        isSubmitted:true
      })

      if (isEdit) {
        dispatch(editPost ( this.props.post.id, title, body) )
      } else {
        dispatch(postAddPost({ title, author, body, category }))
      }

    } else {
      this.setState({
        formValid:false,
        isSubmitted:true,
      })
    }
  }

  handleAlertDismiss = (e) => {
    this.setState({
     formValid: true,
     isSubmitted: false
    })
  }

  render() {

    return (
      <div className="container" style={{paddingTop: 60}}>

        {( !this.state.formValid && this.state.isSubmitted) && (
          <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
            <h4 className="text-center">Oops!! Each field needs a value.</h4>
          </Alert>
        )}

        {(this.state.formValid && this.state.isSubmitted) && (
          <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
            <h4 className="text-center">Great!!! Post submitted.</h4>
          </Alert>
        )}

        <form>
          <Row>
            <Col xs={12}>
              <FormGroup
                controlId="readable-title">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  name="title"
                  value={this.state.title}
                  type="text"
                  placeholder="Enter Post Title"
                  onChange={this.fieldChange}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup
                controlId="readable-post-body">
                <ControlLabel>Body</ControlLabel>
                <FormControl
                  name="body"
                  componentClass="textarea"
                  placeholder="Enter Post Body"
                  value={this.state.body}
                  onChange={this.fieldChange}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6}>
              <FormGroup
                controlId="readable-author">
                <ControlLabel>Author</ControlLabel>

                <FormControl
                  type="text"
                  name="author"
                  placeholder="Authored by"
                  readOnly={this.state.isEdit}
                  value={this.state.author}
                  onChange={this.fieldChange}/>
              </FormGroup>
            </Col>

            <Col xs={12} sm={6}>
              <FormGroup
                controlId="readable-select-category">
                <ControlLabel>Select Category</ControlLabel>

                <FormControl
                  readOnly={this.state.isEdit}
                  label="category"
                  componentClass="select"
                  value={this.state.category}
                  inputRef={(ref)=>{this.category = ref}}
                  onChange={() => this.setState({category: this.category.value}) }>
                    <option value="none selected">none selected</option>
                    {this.props.categories.map( (cat,idx) =>
                      <option key={idx} value={cat.name}>{cat.name}</option>
                    )}
                </FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Row className="text-center">
            <Col xs={6}>
              <div><Button onClick={() => this.resetForm()}>
               Cancel
              </Button></div>
            </Col>
              <div><Button onClick={() => this.submitPost()}>
                Save
              </Button></div>
            <Col xs={6}>
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

function mapStateToProps( { categories, posts} ) {
  return {
    categories,
    posts
  }
}


export default connect(mapStateToProps)(FormPost)


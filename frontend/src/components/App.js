import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home';
import PostDetail from './PostDetail'
import NewPost from './NewPost'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'voteScore',
    }
  }

  // componentDidMount() {

  // }

  render() {

    return (

      <div className="App">
        Hello
      </div>

    )
  }
}

export default App;

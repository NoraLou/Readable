import React, { Component } from 'react';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { fetchAllPosts } from '../utils/api.js';
import Header from './common/Header';
import Home from './Home';

class App extends Component {

  state = {
    posts : null
  }

  componentDidMount() {
    fetchAllPosts()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;

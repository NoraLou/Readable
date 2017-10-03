import React, { Component } from 'react';
import MdAddCircleOutline from'react-icons/lib/md/add-circle-outline';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import PostDetail from './PostDetail'


class Test extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <div className="header-container">
            <span>READABLE</span>
            <span className="float-right">
              <MdAddCircleOutline size={40}/>
            </span>
          </div>
        </header>

        <div className="container">
          <PostDetail />
        </div>


      </div>
    )
  }
}

export default Test;


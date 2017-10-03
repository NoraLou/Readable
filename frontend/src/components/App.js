import React, { Component } from 'react';
import MdAddCircleOutline from'react-icons/lib/md/add-circle-outline';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';

class App extends Component {
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
          <div className="post-card">
            <div className="post-content">
                <div className="post-details">
                 <span>Title</span>
                 <span>10-02-17</span>
                 <span>Funny McFace</span>
                </div>
                <div className="post-summary">
                 <p> slkfjalkjdf kslkjf lkjdflkajllkj   kdjflkaj  lkdjfall  lkjdflkjlklakjdf </p>
                </div>
            </div>
            <div className="voting">
              <div className="content">
                <span className="icon-wrap">
                  <MdThumbDown size={30}/>
                  <div className="vote-total">14</div>
                </span>
                <span className="icon-wrap">
                  <MdThumbUp size={30}/>
                  <div className="vote-total">3</div>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;

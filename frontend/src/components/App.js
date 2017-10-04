import React, { Component } from 'react';
import MdAddCircleOutline from'react-icons/lib/md/add-circle-outline';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import { fetchAllPosts } from '../utils/api.js'

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

        <header>ion
          <div className="header-container">
            <span>READABLE</span>
            <span className="float-right">
              <MdAddCircleOutline size={40}/>
            </span>
          </div>
        </header>


        {/* App Container */}
        <div className="container">

        {/* Dropdowns */}
          <div className="select-container">
            <span>SORT BY :</span>
            <select>
              <optgroup label="Sort-By">
                <option>Option 1</option>
                <option>Option 2</option>
              </optgroup>
            </select>
          </div>
          <div className="select-container">
            <span>CATEGORY</span>
            <select>
              <optgroup label="Category">
                <option>Option 1</option>
                <option>Option 2</option>
              </optgroup>
            </select>
          </div>

         {/* POSTS */}
          <div className="post-card">
            <div className="post-content content">
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

          <div className="post-card">
            <div className="post-content content">
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

          <div className="post-card">
            <div className="post-content content">
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



        </div>{/* App Container */}

      </div>
    )
  }
}

export default App;

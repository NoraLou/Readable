import React, { Component } from 'react';
import MdAddCircleOutline from'react-icons/lib/md/add-circle-outline';

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
            <div className="content">
              <div className="post-content">

              </div>

              <div className="voting">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

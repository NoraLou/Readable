import React, { Component } from 'react';
import MdDelete from 'react-icons/lib/md/delete';
import MdCreate from 'react-icons/lib/md/create';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdComment from 'react-icons/lib/md/comment';
import MdAdd from 'react-icons/lib/md/add';


class PostDetail extends Component {
  render() {
    return (

        <section className="post-detail-view">

          <div className="full-post-detail">
            <div className="post-details">
              <span>Title</span>
              <span>10-02-17</span>
              <span>Funny McFace</span>
              <span className="float-right">
                <span>
                  <MdDelete size={30}/>
                </span>
                <span>
                  <MdCreate size={30}/>
                </span>
              </span>
            </div>
            <div className="full-post-content">
              Williamsburg messenger bag yr biodiesel pabst cardigan food truck taiyaki. Gentrify etsy semiotics activated charcoal twee literally deep v meggings stumptown tilde godard tacos. Man braid prism raclette vape franzen cornhole. Gochujang pinterest you probably haven't heard of them, hot chicken live-edge plaid umami blog narwhal. Taxidermy marfa squid +1 master cleanse try-hard vape, umami single-origin coffee slow-carb you probably haven't heard of them. Narwhal schlitz vegan green juice squid, pour-over flannel listicle single-origin coffee mlkshk lyft gochujang banh mi. Chambray air plant vinyl pop-up. +1 flannel twee drinking vinegar swag. Messenger bag hot chicken migas la croix af neutra bushwick swag skateboard poutine live-edge succulents dreamcatcher tofu roof party. Butcher palo santo blue bottle 8-bit, coloring book pinterest letterpress meh neutra fashion axe. Gastropub DIY fingerstache selvage deep v keytar, bespoke ethical. Meh yr ramps pinterest master cleanse +1 vice mumblecore.
            </div>
            <div>
              <span className="full-vote-tally-container">
                <span className="icon-wrap">
                  <MdThumbUp size={30}/>
                  <div className="vote-total">14</div>
                </span>
              </span>

              <span className="full-vote-tally-container">
                <span className="icon-wrap">
                  <MdThumbDown size={30}/>
                  <div className="vote-total">14</div>
                </span>
              </span>
            </div>
          </div>
          {/* Full Post Detail End */}


          {/* Add Comments */}
          <div className="comment-add">
            <span>ALL COMMENTS</span>
            <span className="float-right">
              <span className="circle"><MdAdd size={20}/><MdComment size={40}/></span>
            </span>
          </div>
          {/* Add Comments */}


          {/* allComments*/}
          <div className="all-comments-container">

            <div className="post-card">
              <div className="voting">
                <div className="content">
                  <span className="icon-wrap">
                    <MdThumbDown size={20}/>
                    <div className="vote-total">14</div>
                  </span>
                  <span className="icon-wrap">
                    <MdThumbUp size={20}/>
                    <div className="vote-total">3</div>
                  </span>
                </div>
              </div>

              <div className="comment-content">
                <div className="content">
                  <div className="post-details">
                    <span>Funny McFace</span>
                    <span>10-02-17</span>
                  </div>
                  <div className="post-summary">
                   <p> slkfjalkjdf kslkjf lkjdflkajllkj   kdjflkaj  lkdjfall  lkjdflkjlklakjdf </p>
                  </div>
                </div>
              </div>

              <div className="editing">
                <div className="content">
                  <span className="icon-wrap">
                    <MdDelete size={27}/>
                  </span>
                  <span className="icon-wrap">
                    <MdCreate size={27}/>
                  </span>
                </div>
              </div>
            </div> {/*post-card*/}

            <div className="post-card">
              <div className="voting">
                <div className="content">
                  <span className="icon-wrap">
                    <MdThumbDown size={20}/>
                    <div className="vote-total">14</div>
                  </span>
                  <span className="icon-wrap">
                    <MdThumbUp size={20}/>
                    <div className="vote-total">3</div>
                  </span>
                </div>
              </div>

              <div className="comment-content">
                <div className="content">
                  <div className="post-details">
                    <span>Funny McFace</span>
                    <span>10-02-17</span>
                  </div>
                  <div className="post-summary">
                   <p> slkfjalkjdf kslkjf lkjdflkajllkj   kdjflkaj  lkdjfall  lkjdflkjlklakjdf </p>
                  </div>
                </div>
              </div>

              <div className="editing">
                <div className="content">
                  <span className="icon-wrap">
                    <MdDelete size={27}/>
                  </span>
                  <span className="icon-wrap">
                    <MdCreate size={27}/>
                  </span>
                </div>
              </div>
            </div> {/*post-card*/}

            <div className="post-card">
              <div className="voting">
                <div className="content">
                  <span className="icon-wrap">
                    <MdThumbDown size={20}/>
                    <div className="vote-total">14</div>
                  </span>
                  <span className="icon-wrap">
                    <MdThumbUp size={20}/>
                    <div className="vote-total">3</div>
                  </span>
                </div>
              </div>

              <div className="comment-content">
                <div className="content">
                  <div className="post-details">
                    <span>Funny McFace</span>
                    <span>10-02-17</span>
                  </div>
                  <div className="post-summary">
                   <p> slkfjalkjdf kslkjf lkjdflkajllkj   kdjflkaj  lkdjfall  lkjdflkjlklakjdf </p>
                  </div>
                </div>
              </div>

              <div className="editing">
                <div className="content">
                  <span className="icon-wrap">
                    <MdDelete size={27}/>
                  </span>
                  <span className="icon-wrap">
                    <MdCreate size={27}/>
                  </span>
                </div>
              </div>
            </div> {/*post-card*/}
          </div>
        </section>
    )
  }
}

export default PostDetail

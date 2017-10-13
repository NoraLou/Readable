import * as PostAPI from '../utils/postAPI'


export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_VOTE = 'RECEIVE_POST_VOTE'

// export const DELETE_POST = 'DELETE_POST'
// export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'


const formatDate = (post) => {
  if (post.formattedDate) return post
  let date = new Date (post.timestamp)
  let formattedDate = date.toDateString()
  return {
    ...post,
    formattedDate
  }
}







function receivePosts( posts ) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => formatDate(post))
  }
}
export function fetchAllPosts() {
  return dispatch => {
    return PostAPI.fetchAllPosts()
      .then(json => {
        return dispatch(receivePosts(json))
      })
  }
}

function receiveVoteChange( post ){
  return {
    type: RECEIVE_POST_VOTE,
    post
  }
}
export function postVoteChange( id, option ){
  return dispatch => {
    return PostAPI.votePost(id, option)
      .then(json => {
        return dispatch(receiveVoteChange(json))
      })
  }
}



function receiveAddedPost( post ) {
  post.commentCount = 0
  return {
    type: RECEIVE_POST,
    post
  }
}
export function postAddPost(post) {
  return dispatch => {
    return PostAPI.addPost(post)
      .then(json => {
        return dispatch(receiveAddedPost(json))
      })
  }
}



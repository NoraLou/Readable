import * as PostAPI from '../utils/postAPI'
import { formatDate } from '../utils/helpers'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POST_VOTE = 'RECEIVE_POST_VOTE'

// export const DELETE_POST = 'DELETE_POST'
export const RECEIVE_POST_EDIT = 'RECEIVE_POST_EDIT'
export const VOTE_POST = 'VOTE_POST'


function receivePosts( posts ) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => formatDate(post))
  }
}
export function fetchAllPosts( category ) {
  return dispatch => {
    return PostAPI.fetchAllPosts( category )
      .then(json => {
        return dispatch(receivePosts(json))
      })
  }
}

function receivePost( post ) {
  return {
    type: RECEIVE_POST,
    post: formatDate(post)
  }
}
export function getPost( postId ) {
  return dispatch=> {
    return PostAPI.getPost( postId )
      .then( json => {
        return dispatch(receivePost(json))
      })
  }
}



function receivePostEdit( post ) {
  return {
    type: RECEIVE_POST_EDIT,
    post: post
  }
}

export function editPost (id, title, body ) {
  console.log( `id ${id}, title ${title}, body ${body}`)
  return dispatch => {
    return PostAPI.editPost(id, title, body)
      .then(json => {
        console.log("PostAPI editPost json :", json)
        return dispatch(receivePost(json))
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
    post: formatDate(post)
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



import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_POST_VOTE,
  RECEIVE_POST_EDIT,
} from '../actions/postActions'

import {
  RECEIVE_POST_COMMENTS
} from '../actions/commentActions'

import { RECEIVE_CATEGORIES } from '../actions/categoryActions'


function posts( state={}, action) {
  switch (action.type) {

    case RECEIVE_POSTS:

      const posts = action.posts.reduce( (postHash, postObj) => {
          postHash[postObj.id] = postObj
          return postHash
        },{})
      return {
        ...posts
      }

    case RECEIVE_POST:
      console.log("RECEIVE POST ACTION :", action)
      return {
        ...state,
        [action.post.id]:action.post
      }

    case RECEIVE_POST_VOTE:
      return  {
        ...state,
        [action.post.id]:action.post
      }

    default:
      return state
  }
}

function categories( state=[], action) {
  switch (action.type) {

    case RECEIVE_CATEGORIES:
      return [
       ...action.categories
      ]
    default:
      return state
  }
}


function comments( state={}, action ) {
  switch (action.type) {

    case RECEIVE_POST_COMMENTS:
      const comments = action.comments.reduce( (commentHash, commentObj) => {
          commentHash[commentObj.id] = commentObj
          return commentHash
        },{})
      return {
        ...comments
      }
    default:
      return state
  }
}

export default combineReducers({
  comments,
  posts,
  categories
})

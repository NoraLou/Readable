import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_POST_VOTE
} from '../actions/postAction'

import { RECEIVE_CATEGORIES } from '../actions/categoryAction'


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

export default combineReducers({
  posts,
  categories
})

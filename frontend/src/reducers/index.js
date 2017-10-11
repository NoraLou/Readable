import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  RECEIVE_POST_VOTE
} from '../actions/postAction'

import { RECEIVE_CATEGORIES } from '../actions/categoryAction'


function posts( state=[], action) {
  switch (action.type) {

    case RECEIVE_POSTS:
      return [
        ...action.posts
      ]
    case RECEIVE_POST:
      return [
        ...state,
        ...action.post
      ]
    case RECEIVE_POST_VOTE:
      console.log("Vote State : ", state)
      return state
    default:
      return state
  }
}

function categories( state = [], action) {
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

import { combineReducers } from 'redux'
import {
  RECEIVE_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  VOTE_POST,
} from '../actions/postAction'

import { RECEIVE_CATEGORIES } from '../actions/categoryAction'


function posts( state=[], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return
        action.posts
    default:
      return state
  }
}

//const initialCategory = [{ name :'all', path: '/'}]

function categories( state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return
        action.categories
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories
})

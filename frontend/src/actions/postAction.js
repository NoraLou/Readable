import * as PostAPI from '../utils/postAPI'


export const RECEIVE_POSTS= 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'


export function fetchAllPosts() {
  return dispatch => {
    return PostAPI.fetchAllPosts()
      .then(json => {
        console.log('fetchAllPost Action  json :', json)
        return dispatch(receivePosts(json))
      })
  }
}

function receivePosts( posts ) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

// posts: json.data.children.map(child => child.data),

export const ADD_EDIT_POST = 'ADD_EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export function addPost ({post}) {
  return {
    type: ADD_EDIT_POST,
    post,
  }
}

export function deletePost ({post}) {
  return {
    type: DELETE_POST
    post,
  }
}

import * as CommentsAPI from '../utils/commentsAPI'

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'


function receivePostComments (){
  return {
    type: RECEIVE_POST_COMMENTS,
    comments
  }
}
export function fetchPostComments( postID ) {
  return dispatch => {
    return CommentsAPI.fetchPostComments()
      .then(json => {
         return dispatch(receivePostComments(json))
      })
  }
}

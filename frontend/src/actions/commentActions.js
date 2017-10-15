import * as CommentsAPI from '../utils/commentsAPI'
import { formatDate } from '../utils/helpers'

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'


function receivePostComments(comments){
  return {
    type: RECEIVE_POST_COMMENTS,
    comments: comments.map(comment => formatDate(comment))
  }
}

export function fetchPostComments( postID ) {
  return dispatch => {
    return CommentsAPI.fetchPostComments( postID )
      .then(json => {
         return dispatch(receivePostComments(json))
      })
  }
}

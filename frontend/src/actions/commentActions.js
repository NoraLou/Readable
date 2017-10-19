import * as CommentsAPI from '../utils/commentsAPI'
import { formatDate } from '../utils/helpers'

export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'
export const RECEIVE_ADDED_COMMENT = 'RECEIVE_ADDED_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'

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

function receiveDeletedComment( id ){
  return {
    type: DELETE_POST_COMMENT,
    id
  }
}
export function deletePostComment( commentID ) {
  return dispatch => {
    return CommentsAPI.deleteComment( commentID )
      .then(()=>dispatch(receiveDeletedComment(commentID)))
  }
}


function receiveAddedComment( comment ){
  comment.commentCount=0
  return {
    type: RECEIVE_ADDED_COMMENT,
    comment
  }
}
export function addComment( comment ) {
  return dispatch => {
    return CommentsAPI.addComment(comment)
    .then((json) => dispatch(receiveAddedComment(comment)))
  }
}


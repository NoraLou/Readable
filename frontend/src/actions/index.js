// import fetch from 'isomorphic-fetch'

export const GET_POST = 'GET_POST'
export const SET_POSTS= 'SET_POSTS'
export const ADD_POST = 'ADD_EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'

export const GET_CATEGORIES = 'GET_CATEGORY'
export const SET_CATEGORY = 'SET_CATEGORY'
export const GET_CATEGORY_POST = 'GET_CATEGORY_POST'

export const SET_COMMENTS = 'SET_COMMENTS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'ADD_COMMENT'


{/*https://stackoverflow.com/questions/40250036/where-to-put-api-calls-in-react-redux-architecture*/}
{/* shorten all width .{..post} syntax ? */}

{/*API call..async w/ thunk.. then bound dispatch.. SET POSTS */}
export const getAPIPosts = (category, id) => {
}

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    posts
  }
}


export const addAPIPost = ({... post})  => {
}
export const addPost = ({author, title, body, category, id, timestamp, voteScore, deleted}) => {
  return {
    type: ADD_POST,
    author,
    title,
    body,
    category,
    id,
    timestamp,
    voteScore,
    deleted
  }
}

export const deleteAPIPost = id => {
}
export const deletePost = id => {
  return {
    type: DELETE_POST,
    id
  }
}

export const editAPIPost = (id, post) => {
}
export const editPost = (id, post) => {
  return {
    type: EDIT_POST,
    id,
    post
  }
}

export const voteAPIPost = (id, post) => {
}
export const votePost = (id, voteScore) => {
  return {
    type: VOTE_POST,
    id,
    voteScore
  }
}


// export const getAPICategoryPost = () = {
//   return setPosts
// }


// {/*state default is All*/}
// export const getAPIAllCategory = () => {
// }
export const setCategory = category => {
  return {
    type: SET_CATEGORY,
    category
  {/* set action types for category based on api call */}
  }
}

// export const getAPIComment = ( postID ) => {
// }
export const setComments = comments => {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export const deleteAPIComment = ( commentID ) => {
}
export const deleteComment = commentID => {
  return {
    type: DELETE_COMMENT,
    commentID
  }
}

// export const editAPIComment = ( commentID ) => {
// }
export const editComment = commentID => {
  return {
    type: EDIT_COMMENT,
    commentID
  }
}

// export const voteAPIComment = ( commentID, voteScore ) => {
// }
export const voteComment = (commentID, voteScore) => {
  return {
    type: EDIT_COMMENT,
    voteScore
  }
}










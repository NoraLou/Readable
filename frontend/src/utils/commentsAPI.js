import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';

const URL = 'http://localhost:3001/';
const headers = {
  headers: {
    'Authorization': 'super-secret',
    'Content-Type': 'application/json'
  },
};

const postMethod = {
  method: 'POST'
};

const deleteMethod = {
  method: 'DELETE'
}

const putMethod = {
  method: 'PUT'
}

export const fetchPostComments = (postId) => {
  return fetch( `${URL}posts/${postId}/comments`, {...headers})
  .then(res => res.json())
}


export const deleteComment = (id) => {
  return fetch(`${URL}comments/${id}`, {
    ...deleteMethod,
    ...headers,
    body: {id}
  })
  .then(res => res.json())
}

export const addComment = (comment) => {
  const id = v4();
  const timestamp = Date.now()
  comment = {
    ...comment,
    id,
    timestamp
  }
  return fetch(`${URL}comments`, {
    ...postMethod,
    ...headers,
    body: JSON.stringify({...comment})
  })
  .then( res => res.json())
  .catch((error) => {
    console.log(`Error : ${error}`)
  })
}


 //    POST /comments
 //      USAGE:
 //        Add a comment to a post

 //      PARAMS:
 //        id: Any unique ID. As with posts, UUID is probably the best here.
 //        timestamp: timestamp. Get this however you want.
 //        body: String
 //        author: String
 //        parentId: Should match a post id in the database.



 //    DELETE /comments/:id
 //      USAGE:
 //        Sets a comment's deleted flag to 'true'

// export const deletePost = (id) => {
//   console.log("API with Id :", id)
//   return fetch(`${URL}posts/${id}`, {
//     ...deleteMethod,
//     ...headers,
//     body: JSON.stringify(id)
//   })
//   .then( res => res.json())
//   .catch((error) => {
//     console.log(`Error : ${error}`)
//   })
// }

// export const votePost = (id, option) => {
//   const request = {
//     ...postMethod,
//     ...headers,
//     body: JSON.stringify({ option })
//   }
//   return fetch(`${URL}posts/${id}`, request)
//     .then( res => res.json())
// }


// export const editPost = (id, title, body) => {
//   const request = {
//     ...putMethod,
//     ...headers,
//     body: JSON.stringify({ title, body})
//   }
//   return fetch(`${URL}posts/${id}`, request)
//     .then( res => res.json())
//     .catch((error) => {
//       console.log(`Error : ${error}`)
//     })
// }


// export const addPost = (post) => {
//   const id = v4();
//   const timestamp = Date.now();
//   post = {
//     ...post,
//     id,
//     timestamp
//   }
//   return fetch( `${URL}posts`, {
//       ...postMethod,
//       ...headers,
//       body: JSON.stringify({...post}),
//     })
//     .then( res => res.json())
//     .catch((error) => {
//       console.log(`Error : ${error}`)
//     })
// }




    // GET /posts/:id/comments
    //   USAGE:
    //     Get all the comments for a single post

 //    POST /comments
 //      USAGE:
 //        Add a comment to a post

 //      PARAMS:
 //        id: Any unique ID. As with posts, UUID is probably the best here.
 //        timestamp: timestamp. Get this however you want.
 //        body: String
 //        author: String
 //        parentId: Should match a post id in the database.

 //    GET /comments/:id
 //      USAGE:
 //        Get the details for a single comment

 //    POST /comments/:id
 //      USAGE:
 //        Used for voting on a comment.

 //    PUT /comments/:id
 //      USAGE:
 //        Edit the details of an existing comment

 //      PARAMS:
 //        timestamp: timestamp. Get this however you want.
 //        body: String

 //    DELETE /comments/:id
 //      USAGE:
 //        Sets a comment's deleted flag to 'true'
 //

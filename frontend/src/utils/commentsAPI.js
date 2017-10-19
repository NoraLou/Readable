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


export const editComment = (id, body) => {
  const timestamp = Date.now()
  const request = {
    ...putMethod,
    ...headers,
    body: JSON.stringify({ timestamp, body})
  }
  return fetch(`${URL}comments/${id}`, request)
    .then( res => res.json())
    .catch((error) => {
     console.log(`Error : ${error}`)
    })
 }


export const voteComment = (id, option) => {
  const request = {
    ...postMethod,
    ...headers,
    body: JSON.stringify({ option })
  }
  return fetch(`${URL}comments/${id}`, request)
    .then( res => res.json())
}

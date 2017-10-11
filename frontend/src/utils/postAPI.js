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


export const fetchAllPosts = () => {
  return fetch( `${URL}posts`, {...headers})
    .then( data => data.json())
}

export const deletePost = (id) => {
  return fetch(`${URL}posts/${id}`, {
    ...deleteMethod,
    ...headers,
    body: JSON.stringify({id})
  })
  .then( data => data)
  .catch((error) => {
    console.log(`Error : ${error}`)
  })
}

export const getPost = (id) => {
  return fetch(`${URL}posts/${id}`, {...headers})
  .then( data => data.json())
  .catch((error) => {
    console.log(`Error : ${error}`)
  })
}


export const votePost = (id, option) => {
  const request = {
    ...postMethod,
    ...headers,
    body: JSON.stringify({ option })
  }
  return fetch(`${URL}posts/${id}`, request)
    .then( res => res.json())
}


export const editPost = (id, title, string) => {
  const request = {
    ...putMethod,
    ...headers,
    body: JSON.stringify({ title, string })
  }
  return fetch(`${URL}posts/${id}`, request)
    .then( res => res.json())
}


export const addPost = (post) => {
  const id = v4();
  const timestamp = Date.now();
  post = {
    ...post,
    id,
    timestamp
  }
  return fetch( `${URL}posts`, {
      ...postMethod,
      ...headers,
      body: JSON.stringify({...post}),
    })
    .then( res => res.json())
    .catch((error) => {
      console.log(`Error : ${error}`)
    })
}


export const fetchAllCategories = () => {
  return fetch( `${URL}categories`, {...headers})
    .then(res => res.json())
    .then(data => data.categories)
    .catch((error) => {
      console.log(`Error : ${error}`)
    })
}





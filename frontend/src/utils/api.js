import fetch from 'isomorphic-fetch'
import { v4 } from 'uuid';

const URL = 'http://localhost:3001/'
const headers = {
  headers: {
    'Authorization': 'super-secret',

  },
}



export const fetchAllPosts = () => {
  return fetch( `${URL}posts`, {...headers})
    .then(res => res.text())
    .then(data =>  JSON.parse(data))
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


export const addPost = (post) => {
  const id = v4();
  const timestamp = Date.now();
  post = {
    ...post,
    id,
    timestamp
  }
  console.log("post:", post)
  return fetch( `${URL}posts`, {
    method: "POST",
    headers: { 'Authorization': 'super-secret'},
    body: post
  })
  .then( res => console.log('res ', res))
  .catch((error) => {
    console.log(`Error : ${error}`)
  })
}

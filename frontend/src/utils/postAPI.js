import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';
import { fetchPostComments } from './commentsAPI'

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


const addCommentCount = (arrPosts) => {
  const commentPromises = arrPosts.map(post => fetchPostComments(post.id))
  return Promise.all(commentPromises)
    .then( allCommentsArr => {
      return allCommentsArr.reduce( (accum,curr) => {
        if (curr.length) {
            let commentCount = curr.length
            let parentId = curr[0].parentId
            accum[parentId] = commentCount
          }
        return accum
      }, {})
    })
    .then((commentsHash) =>
      arrPosts.map( (post) => {
        let commentValue = commentsHash[post.id] ? commentsHash[post.id] : 0
        return {
          ...post,
          ['commentCount']:commentValue
        }
      })
    )
}


export const fetchAllPosts = (category) => {
  if (category) {
    return fetch(`${URL}${category}/posts`, {...headers})
      .then( res => {
        return res.json()
      })
      .then( arrPosts => addCommentCount(arrPosts))
  } else {
    return fetch( `${URL}posts`, {...headers})
      .then( res => {
        return res.json()
      })
      .then( arrPosts => addCommentCount(arrPosts))
  }
}


export const deletePost = (id) => {
  return fetch(`${URL}posts/${id}`, {
    ...deleteMethod,
    ...headers,
    body: JSON.stringify(id)
  })
  .then( res => res.json())
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


export const editPost = (id, title, body) => {
  const request = {
    ...putMethod,
    ...headers,
    body: JSON.stringify({ title, body})
  }
  return fetch(`${URL}posts/${id}`, request)
    .then( res => res.json())
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





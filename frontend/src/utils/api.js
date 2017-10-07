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








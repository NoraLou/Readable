const URL = 'http://localhost:3001/'
const auth = 'super_secret'

export const fetchAllPosts = () => {
  return fetch( `${URL}posts`, { headers: { 'Authorization': auth }})
    .then(res => res.text())
    .then(data =>  JSON.parse(data))
    .catch((error) => {
      console.log(`Error : ${error}`)
    })
}






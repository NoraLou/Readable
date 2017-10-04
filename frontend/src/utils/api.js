// const allPostsURL = 'http://localhost:3001/posts'
// const auth = 'super_secret'

export function fetchAllPosts () {
  return fetch( 'http://localhost:3001/posts', { headers: { 'Authorization': 'super_secret'}})
    .then((res) => res.json())
    .then((data) => {
      console.log(` RES DATA : ${data}`)
      let posts = data.results
      console.log("posts :", posts)
      console.log( "data.results ", data.results)
    })
    .catch((error) => {
      console.log(`Error : ${error}`)
    })
}


// export function createPost() {
//   r
// }





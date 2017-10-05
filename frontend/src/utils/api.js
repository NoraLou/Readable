const URL = 'http://localhost:3001/'
const auth = 'super_secret'

// export const getAllPosts = () => {
//    const url = 'http://localhost:3001/posts';
//    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }} )
//      .then( (res) => { return(res.text()) })
//      .then((data) => {
//        console.log("data :", JSON.parse(data))
//        var p = []
//        p = JSON.parse(data)
//        console.log("p :", p)
//      });
//  }

export const fetchAllPosts = () => {
  return fetch( `${URL}posts`, { headers: { 'Authorization': auth }})
    .then(res => res.text())
    .then(data =>  JSON.parse(data))
    .catch((error) => {
      console.log(`Error : ${error}`)
    })
}

// export const fetchAllPosts = () => {
//   return fetch( `${URL}posts`, { headers: { 'Authorization': auth }})
//     .then((res) => res.json())
//     .then( ({posts}) => posts.map( ({post})  => post)        )
//     .catch((error) => {
//       console.log(`Error : ${error}`)
//     })
// }

// export function createPost() {
//   r
// }





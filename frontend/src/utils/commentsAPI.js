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


 //    GET /posts/:id/comments
 //      USAGE:
 //        Get all the comments for a single post

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

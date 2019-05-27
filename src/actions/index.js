export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

export function fetchPosts() {
  const url = "http://reduxblog.herokuapp.com/api/posts?key=mattmatt";
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  }
}

export function fetchPost(id) {
  const url = `http://reduxblog.herokuapp.com/api/posts/${id}?key=mattmatt`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_POST,
    payload: promise
  }
}

export function createPost(data, callback) {
  const url = "http://reduxblog.herokuapp.com/api/posts?key=mattmatt";
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(callback);

  return {
    type: POST_CREATED,
    payload: request
  }
}

const url = 'http://localhost:3000/api/posts'

export default function getComments(cb) {
  fetch(`${url}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      // console.log(JSON.stringify(myJson));
      cb(myJson)
    })
}

export function createComment(comment){
  return fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(comment)
  })
  .then(resp=>resp.json())
  .then(function (response){
    return (response);
  })
}
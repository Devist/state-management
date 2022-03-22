const END_POINT = 'http://localhost:3000'

const createArticle = (data) =>
  fetch(`${END_POINT}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())

const getArticleList = () =>
  fetch(`${END_POINT}/articles`).then((res) => res.json())

const api = {
  createArticle,
  getArticleList,
}

export default api

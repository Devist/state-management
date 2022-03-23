const END_POINT = 'http://localhost:3000'

const getArticleList = () =>
  fetch(`${END_POINT}/articles`).then((res) => res.json())

const api = {
  getArticleList,
}

export default api

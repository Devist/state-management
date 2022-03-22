import api from '../api'

const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS'
const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR'

const GET_ARTICLES = 'GET_ARTICLES'
const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR'

const createArticle = (data) => (dispatch) => {
  api
    .createArticle(data)
    .then((newArticle) =>
      dispatch({ type: CREATE_ARTICLE_SUCCESS, payload: newArticle })
    )
    .catch((error) => {
      console.log(error)
      dispatch({ type: CREATE_ARTICLE_ERROR, error: error })
    })
}

const getArticleList = () => (dispatch) => {
  dispatch({ type: GET_ARTICLES })

  api
    .getArticleList()
    .then((articles) =>
      dispatch({ type: GET_ARTICLES_SUCCESS, payload: articles })
    )
    .catch((error) => dispatch({ type: GET_ARTICLES_ERROR, error: error }))
}

export {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  createArticle,
  getArticleList,
}

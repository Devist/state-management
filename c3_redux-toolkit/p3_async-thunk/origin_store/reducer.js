import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
} from './actions'

const initialState = {
  articles: [],
  status: null,
}

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        status: 'PENDING',
      }
    case GET_ARTICLES_SUCCESS:
      return {
        articles: action.payload,
        status: 'SUCCESS',
      }
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        status: 'ERROR',
      }
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      }
    case CREATE_ARTICLE_ERROR:
      return state
    default:
      return state
  }
}

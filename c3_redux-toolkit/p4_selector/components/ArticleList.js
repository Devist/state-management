import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// step1
import { createSelector } from '@reduxjs/toolkit'

import ArticleType from './ArticleType'

import { getArticleList } from '../store/actions'

// step2

const articlesSelector = (state) => state.articles

// 첫번째 인자로 셀렉터를 받는다.
const unReadArticle = createSelector(articlesSelector, (articles) =>
  articles.filter((article) => !article.isRead)
)

// /step2

const ArticleList = () => {
  // TODO: Refactoring 해야 할 부분
  // 렌더링 될 때마다, article에서 article.isRead가 false 인 리스트만 나열하기 위한 행위가,
  // 계속 추가적인 비용이 발생됨
  // useMemo 등을 쓸수도 있겠지만, 간단하게 redux-toolkit을 이용해서도 처리 가능
  // const articles = useSelector((state) =>
  //   state.articles.filter((article) => !article.isRead)
  // )
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getArticleList())
  // }, [])

  const articles = useSelector(unReadArticle)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticleList())
  }, [])

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <ArticleType />
          {articles?.map(({ userId, id, title, body }) => (
            <div className="article-preview" key={id}>
              <div className="preview-link">
                <h1>{title}</h1>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleList

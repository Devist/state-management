import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getArticleList } from '../store/actions'

const ArticleList = () => {
  const dispatch = useDispatch()

  const articles = useSelector((state) => state.articles)
  const status = useSelector((state) => state.status)

  const isSuccess = status !== 'PENDING' && status !== 'ERROR'

  useEffect(() => {
    dispatch(getArticleList())
  }, [])

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          {status === 'PENDING' && <div>...로딩 중</div>}

          {status === 'ERROR' && <div>...에러</div>}

          {isSuccess &&
            articles?.map(({ userId, id, title, body }) => (
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

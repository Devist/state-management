import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import articleApi from '../store/article'

const ArticleList = () => {
  // RTK QUERY 가져오기
  const {
    data: articles,
    isError,
    isLoading,
  } = articleApi.useGetArticleListQuery()

  // rtk query 만 사용했을 뿐인데 정말 코드가 많이 줄었다.
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          {isLoading && <div>...로딩 중</div>}

          {isError && <div>...에러</div>}

          {!isLoading &&
            !isError &&
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

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { articleApi } from '../store/article'

const Editor = () => {
  const history = useHistory()

  // articleList 와 다르게 작명이 다름을 알 수 있다.
  // mutation이 붙은 건 튜플의 형태를 반환을 한다.
  const [createArticle, { isLoading }] = articleApi.useCreateArticleMutation()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onCreateArticle = async (e) => {
    e.preventDefault()

    await createArticle({ title, body })

    history.push('/')
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={onCreateArticle}>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="제목"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  rows="8"
                  placeholder="내용"
                  value={body}
                  onChange={({ target }) => setBody(target.value)}
                />
              </fieldset>
              <button
                className="btn btn-lg pull-xs-right btn-primary"
                type="button"
                onClick={onCreateArticle}
                disabled={isLoading}
              >
                글 등록
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor

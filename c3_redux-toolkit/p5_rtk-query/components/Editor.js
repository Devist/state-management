import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { createArticle } from '../store/actions'

const Editor = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onCreateArticle = async (e) => {
    e.preventDefault()

    await dispatch(createArticle({ title, body }))

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

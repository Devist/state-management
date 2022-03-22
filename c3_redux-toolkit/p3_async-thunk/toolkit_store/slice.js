import { createArticle, getArticleList } from './actions'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
  status: null,
}

const slice = createSlice({
  name: 'article',
  initialState,
  // 비동기 처리는 extraReducer에서
  extraReducers: (builder) => {
    // 두 번째 인자는 성공했을 때
    builder
      .addCase(createArticle.fulfilled, (state, action) => {
        // 이 부분은 불변성을 유지하지 않아도 가능하다
        // redux-toolkit에 immer 가 내장되어 있기 때문
        // 따라서 불변성을 지키지 않아도 이렇게 간단히 처리 가능
        state.articles.push(action.payload)
      })
      .addCase(getArticleList.pending, (state) => {
        state.status = 'PENDING'
      })
      .addCase(getArticleList.fulfilled, (state, action) => {
        // action에서 구현한 getArticleList에서 return한 값들은 action.payload에 담기게 된다.
        state.articles = action.payload
        state.status = 'SUCCESS'
      })
      .addCase(getArticleList.rejected, (state) => {
        state.status = 'ERROR'
      })
  },
})

export default slice

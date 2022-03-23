import { createSlice } from '@reduxjs/toolkit'

import { getArticleList } from './actions'

const initialState = {
  articles: [],
  status: null,
}

const slice = createSlice({
  name: 'article',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArticleList.pending, (state) => {
        state.status = 'PENDING'
      })
      .addCase(getArticleList.fulfilled, (state, action) => {
        state.articles = action.payload
        state.status = 'SUCCESS'
      })
      .addCase(getArticleList.rejected, (state, action) => {
        state.status = 'ERROR'
      })
  },
})

export default slice

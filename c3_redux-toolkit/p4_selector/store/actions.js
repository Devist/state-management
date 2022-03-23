import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../api'

const getArticleList = createAsyncThunk(
  'article/getArticleList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getArticleList()

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export { getArticleList }

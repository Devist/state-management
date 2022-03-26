import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../api'

const createArticle = createAsyncThunk(
  'article/createArticle',
  async (data) => {
    const response = await api.createArticle(data)

    return response
  }
)

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

export { createArticle, getArticleList }

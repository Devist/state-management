import { createAsyncThunk } from '@reduxjs/toolkit'

import api from '../api'

const createArticle = createAsyncThunk(
  'article/createArticle', // slice 단위가 첫번째로 들어감 ('article/')
  // 두번째 인자에 비동기 함수가 들어감
  async (data) => {
    const response = await api.createArticle(data)
    return response
  }
)

const getArticleList = createAsyncThunk(
  'article/getArticleList',
  // 비동기 함수 내부의 두번째 인자로는 thunkAPI가 들어오는데,
  // 여기서는 thunkAPI 중 rejectWithValue를 사용함
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

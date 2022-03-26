import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const END_POINT = 'http://localhost:3000'

const articleApi = createApi({
  // 이 프로젝트, 즉 애플리케이션에 단 하나만 있는 유일값을 넣어야 함
  reducerPath: 'article',
  baseQuery: fetchBaseQuery({ baseUrl: END_POINT }),
  endpoints: (builder) => ({
    getArticleList: builder.query({
      query: () => '/articles',
    }),
  }),
})

export default articleApi

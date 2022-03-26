import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const END_POINT = 'http://localhost:3000'

const articleApi = createApi({
  // 이 프로젝트, 즉 애플리케이션에 단 하나만 있는 유일값을 넣어야 함
  reducerPath: 'article',
  // baseQuery 에서는 다양한 옵션을 수용할 수 있음. 여기선 엔드포인트를 넣어줌
  baseQuery: fetchBaseQuery({ baseUrl: END_POINT }),
  // 엔드포인트 호출 방법
  endpoints: (builder) => ({
    getArticleList: builder.query({
      query: () => '/articles',
    }),
  }),
})

export default articleApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const END_POINT = 'http://localhost:3000'

const articleApi = createApi({
  // 이 프로젝트, 즉 애플리케이션에 단 하나만 있는 유일값을 넣어야 함
  reducerPath: 'article',
  // baseQuery 에서는 다양한 옵션을 수용할 수 있음. 여기선 엔드포인트를 넣어줌
  baseQuery: fetchBaseQuery({ baseUrl: END_POINT }),
  // 글 등록 후 history.push 가 동작할 때, 글이 갱신되지 않는다.
  // 이는 캐시 때문인데, 아래와 같은 방법으로 캐시를 무효화 시킬 수 있다.
  // step1. 여기서 캐시를 구분하는 스트링으로 'Article' 사용
  tagTypes: ['Article'],
  // 엔드포인트 호출 방법
  endpoints: (builder) => ({
    getArticleList: builder.query({
      query: () => '/articles',
      // stpe2. 캐시를 제공하는 측
      providesTags: ['Article'],
    }),
    // mutation 사용
    createArticle: builder.query({
      query: (data) => ({
        url: '/articles',
        method: 'POST',
        body: data,
      }),
      // step3. 캐시를 사용하는 측에서 지속적으로 무효화
      invalidatesTags: ['Article'],
    }),
  }),
})

export default articleApi

// 파일 다 날라가고 이거 하나 남는다

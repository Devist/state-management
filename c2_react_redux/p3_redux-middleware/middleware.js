// middleware
// next : 여러 미들웨어들이 체인과 같이 연결되어 액션을 넘겨주면서 실행하게 됨
// next 미호출시 리듀서에게도 전달되지 않음
export const logger = (store) => (next) => (action) => {
  if (typeof action === 'function') return next(action)

  // step1.
  console.group('LOGGER')
  console.log('prev state', store.getState())

  const result = next(action)

  console.log('action', action)
  console.log('next state', store.getState())
  console.groupEnd()

  return result
}

// action 타입이 function일 경우 action에 store 정보를 넘겨주어
// 비동기 통신을 할 수 있도록 하는 thunk 미들웨어 함수
export const thunk = (store) => (next) => (action) => {
  // step 2
  // action.js의 getCount 확인

  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
}

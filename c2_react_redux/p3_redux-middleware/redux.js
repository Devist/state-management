export const createStore = (reducer, preloadedState, middlewares = []) => {
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []

  const getState = () => {
    return currentState
  }

  const subscribe = (listener) => {
    currentListeners.push(listener)
  }

  const dispatch = (action) => {
    currentState = currentReducer(currentState, action)

    const listeners = currentListeners
    listeners.forEach((listener) => {
      listener()
    })
  }

  const store = {
    getState,
    dispatch,
    subscribe,
  }

  // step3 - applyMiddleware
  // middleware.js 의 미들웨어가 동작할 수 있도록,
  // currying을 이용하여 applyMiddleware 부분 완성하기
  // 방법 : compose 함수를 이용해 배열로 넘어온 미들웨어를 순차적으로 실행할 수 있게 함.
  const middlewareAPI = {
    getState: store.getState,
    dispatch: (action, ...args) => dispatch(action, ...args),
  }

  const chain = middlewares.map((middleware) => middleware(middlewareAPI))
  let wrapDispatch = compose(...chain)(store.dispatch)

  return {
    ...store,
    dispatch: wrapDispatch,
  }
}

const compose = (...middlewares) => {
  return middlewares.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

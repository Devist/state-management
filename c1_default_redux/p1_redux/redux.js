export const createStore = (reducer, preloadedState) => {
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []

  // currentState(전역상태)가 의도치 않게 변경되지 않도록 보호하기 위해
  // getState 함수만을 통해서만 states 값을 확인할 수 있도록 한다.
  // getState에서는 currentState를 인자로 받지도 않고,
  // 함수 내부에서도 선언하지 않았기 때문에
  // closer 가 적용되어, createStore가 생성되었을 때의 상태를 가지고 있게 됨.
  const getState = () => {
    return currentState
  }

  // 상태 변경시 감지를 위해 listener를 배열로 저장 = currentListeners
  const subscribe = (listener) => {
    currentListeners.push(listener)
  }

  // 액션을 통해 새로운 currentState를 만들어주고
  // 적절한 리스너를 할당
  const dispatch = (action) => {
    // 기존의 currentSate를 action을 통해 새로운 currentState로 만들도록 함.
    currentState = currentReducer(currentState, action)

    // currentState가 변경되었을 때,
    // linsteners 배열에 담겨 있는 함수를 callback 하여 실행시켜줌
    const listeners = currentListeners
    listeners.forEach((listener) => {
      listener()
    })
  }

  return {
    dispatch,
    subscribe,
    getState,
  }
}

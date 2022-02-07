import { createReducer } from '@reduxjs/toolkit'
import { decrement, increment, reset } from './actions'

const initState = 0

function isPending(action) {
  return action.type.includes('PENDING')
}

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(increment, (state, action) => state + 1)
    .addCase(decrement, (state, action) => state - 1)
    .addCase(reset, (state, action) => initState)
  // .addMatcher(isPending, (state, action)=> {'조건부 실행'})
  // matching할 수 있는 다른 handler가 없으면 기본 케이스를 제공할 수 있다.
  // .addDefaultCase()
})

export default reducer

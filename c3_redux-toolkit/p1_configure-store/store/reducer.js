import { createReducer } from '@reduxjs/toolkit'
import { increment, decrement, reset } from './actions'

const initState = 0

// function isPending(action) {
//   return action.type.includes('PENDING')
// }

// createReducer(초기값, 빌더콜백)
const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(increment, (state, action) => state + 1)
    .addCase(decrement, (state, action) => state - 1)
    .addCase(reset, (state, action) => initState)
  // .addMatcher('조건','조건에 맞는 또다른 이팩트')
  // .addMatcher('조건', (state, action) => 조건부 실행)
  // .addMatcher(isPending, (state, action) => 조건부 실행)

  // .addDefaultCase()
})

export default reducer

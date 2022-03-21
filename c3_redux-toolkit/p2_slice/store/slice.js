// reducer 단위와 동일하게 생각하면 됨.

import { createSlice } from '@reduxjs/toolkit'

const initState = 0

const slice = createSlice({
  name: 'counter', // step1. slice를 대표하는 이름
  initialState: initState,
  // step2. 이 reducers에서 action을 생성해주기 때문에, 번거롭게 또 다른 액션을 만드는 행위가 필요없음
  reducers: {
    increment: (state) => state + 1, // 액션이 사라진다.
    decrement: (state) => state - 1,
    reset: () => initState,
  },
  // step3. action을 직접 생성해야 하는 경우, 기존 리듀서처럼 직접 빌더를 통해 생성할 수 있다.
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(increment, (state, action) => state + 1)
  //       .addCase(decrement, (state, action) => state - 1)
  //       .addCase(reset, (state, action) => initState)
  //   },
})

// 기존 리듀서
// import { createReducer } from '@reduxjs/toolkit'
// import { increment, decrement, reset } from './actions'

// const reducer = createReducer(initState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => state + 1)
//     .addCase(decrement, (state, action) => state - 1)
//     .addCase(reset, (state, action) => initState);
// });

// export default reducer;

// step4. 스토어에 넣는 방식도 바뀜.
export default slice

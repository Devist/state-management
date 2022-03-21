import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// step5. 액션도 사라졌으므로,
// import { increment, decrement, reset } from '../store/actions';
import slice from '../store/slice'

const App = () => {
  const count = useSelector((state) => state)
  const dispatch = useDispatch()

  // step 5.
  // const onDecrement = () => dispatch(decrement())
  // const onIncrement = () => dispatch(increment())
  // const onReset = () => dispatch(reset())
  const onDecrement = () => dispatch(slice.actions.decrement())
  const onIncrement = () => dispatch(slice.actions.increment())
  const onReset = () => dispatch(slice.actions.reset())

  return (
    <div className="container">
      <span className="count">{count}</span>

      <div className="btn-group">
        <button onClick={onDecrement}>
          <strong>-</strong>
        </button>
        <button onClick={onReset}>
          <strong>RESET</strong>
        </button>
        <button onClick={onIncrement}>
          <strong>+</strong>
        </button>
      </div>
    </div>
  )
}

export default App

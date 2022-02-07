import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/actions';

const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const onDecrement = () => dispatch(decrement());
  const onIncrement = () => dispatch(increment());
  const onReset = () => dispatch(reset());

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
  );
};

export default App;

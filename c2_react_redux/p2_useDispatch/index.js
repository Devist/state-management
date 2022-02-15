const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initState = {
  count: 0,
}

const reducer = (state = initState, { type }) => {
  if (type === DECREMENT) {
    return {
      count: state.count - 1,
    }
  }
  if (type === INCREMENT) {
    return {
      count: state.count + 1,
    }
  }

  return state
}

const useStore = () => {
  return React.useContext(ReactRedux.ReactReduxContext).store
}

const useSelector = (selector) => {
  const store = useStore()

  // step2. ref로 state 초기값 캐치해둠
  const latestSelectedState = React.useRef(selector(store.getState()))

  const [, forceRender] = React.useReducer((s) => s + 1, 0)

  React.useEffect(() => {
    store.subscribe(() => {
      // step3-2. 사이드 이펙트가 잡힐 때마다 셀렉터를 통해 최신 상태를 가져옴
      const newSelectedState = selector(store.getState())

      // step3-3. 캡처된 상태가 undefined이거나
      // 새로운 상태와 캡처된 상태가 같지 않을 때에만 렌더링 되도록 함
      // 이후 새로운 상태를 캡쳐.
      // 여기선 플러스 버튼 눌렀을 때, 리렌더 되지 않도록 함 (현재 상태 업데이트 구현 안했으므로)
      if (
        latestSelectedState.current === undefined ||
        newSelectedState !== latestSelectedState.current
      ) {
        latestSelectedState.current = newSelectedState

        forceRender()
      }
    })
    //step3-1. selector 추가
  }, [store, forceRender, selector])

  return selector(store.getState())
}

/**
 * Redux Dispatch에 접근하기 위한 Hooks
 * @returns {any|function} Redux store의 dispatch
 * @see https://react-redux.js.org/api/hooks#useselector
 *
 * @returns selected state
 */
const useDispatch = () =>
  // step 1. 이미 존재하는 dispatch를 가져옴
  useStore().dispatch

const App = () => {
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const onDecrement = () => {
    dispatch({
      type: DECREMENT,
    })
  }

  const onIncrement = () => {
    dispatch({
      type: INCREMENT,
    })
  }

  return (
    <div className="app-container">
      <span className="count">{counter}</span>
      <div className="btn-group">
        <button onClick={onDecrement}>
          <strong>-</strong>
        </button>
        <button onClick={onIncrement}>
          <strong>+</strong>
        </button>
      </div>
    </div>
  )
}

const store = Redux.createStore(reducer)

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
)

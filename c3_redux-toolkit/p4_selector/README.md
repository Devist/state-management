## Redux Toolkit - selector

`React Redux`의 `useSelector()`를 사용하면`Redux Store`에서 상태를 가져올 수 있으나,
여기서 불필요한 리렌더링이 발생할 수 있음.
`Redux Toolkit`이 내장하고 있는 Selectorator(기존의 reselect를 추상화한)인 `Selector`를 이용하면 이 문제점 간단히 해결 가능

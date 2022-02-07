# useSelector

const result: any = useSelector(selector: Function, equalityFn?: Function)

두 가지 인자를 함수로 취하고 있음

- 첫번째 인자(selector) : 콜백 함수를 통해서 redux store에서 어떠한 상태를 가져오고 싶은지 명시할 수 있음
- 두번째 인자(equalityFn, 선택적): 이전값과 다음값을 비교한 후 true로 반환될 경우에는 다시 렌더링하지 않고, false로 반환될 경우 다시 rendering하는 동등조건비교를 제공

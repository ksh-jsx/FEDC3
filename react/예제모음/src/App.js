/*
useMemo
1. 함수 컴포넌트는 자신의 상태가 변경될 떄 리렌더링된다.
2. 부모 컴포넌트로 부터 받는 prop이 변결될 떄 리렌더링된다.
3. 부모 컴포넌트의 상태가 변경되면 리렌더링된다.

현재의 경우 label이 변경되어도 n도 다시 렌더링되어 sum이 다시 연산되는 문제가 있다. 
이럴 경우 usememo를 통해 n이 다시 렌더링 되지 않도록 설정할 수 있다

근데3번의 경우는 그 자체로 문제가 된다. 자식이 props를 받고있다면 다시 렌더링 되는 것이 맞지만 그렇지 않다면?
지금 count 부분을 보면 setCount떄문에 Box가 다시 렌더링된다
React.memo()사용하면 box가 불필요하게 다시 렌더되지않는 것을 알 수 있다.

3번째 예제의 경우는 어떨까?
React.memo()해도 props의 변화때문에 3개가 전부 다시 렌더링된다
-> useCallback를 쓰자
*/

import ShowSum from "./components/ShowSum";
import { useState } from "react";
import Box from "./components/Box";
import Checkbox from "./components/Checkbox";
import { useCallback } from "react";
import useToggle from "./hooks/useToggle";
import useHover from "./hooks/useHover";

function App() {
  const [label, setLabel] = useState("Result");
  const [n, setN] = useState(10000);
  const [count, setCount] = useState(0);
  const [foodon, setFoodon] = useState(false);
  const [meaton, setMeaton] = useState(false);
  const [fishon, setFishon] = useState(false);

  const [on, toggle] = useToggle();
  const [ref, isHover] = useHover();

  //const foodChange = (e) => setFoodon(e.target.checked);
  //const meatChange = (e) => setMeaton(e.target.checked);
  //const fishChange = (e) => setFishon(e.target.checked); usecallback으로 감싸줘야 3개가 개별적으로 렌더링된다
  const foodChange = useCallback((e) => setFoodon(e.target.checked), []);
  const meatChange = useCallback((e) => setMeaton(e.target.checked), []);
  const fishChange = useCallback((e) => setFishon(e.target.checked), []);

  return (
    <div>
      <button onClick={() => setLabel(label + "!")}>newResult</button>
      <button onClick={() => setN(n + 100)}>setN</button>
      <ShowSum label={label} n={n} />

      <hr />

      {count}
      <button onClick={() => setCount(count + 1)}>setCount</button>
      <Box />

      <hr />

      <Checkbox label="food" on={foodon} onChange={foodChange} />
      <Checkbox label="meat" on={meaton} onChange={meatChange} />
      <Checkbox label="fish" on={fishon} onChange={fishChange} />

      <hr />

      <button onClick={toggle}>{on ? "True" : "False"}</button>
      <br />
      {isHover ? "hover" : "mouseOut"}
      <div ref={ref} style={{ width: "100px", height: "100px", backgroundColor: "blue" }}></div>

      <hr />
    </div>
  );
}

export default App;

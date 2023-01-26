
import HeaderContainer from "./components/header/HeaderContainer";
import MovieContainer from "./components/movies/MovieContainer";

function App() {
  return (
    <>
      <HeaderContainer />
      <MovieContainer />
    </>
  );
}

export default App;

/*
import { atomFamily,useRecoilState } from "recoil";

const sampleState = atomFamily({
  key: "sampleState",
  default: "sample",
});


const AComponent = () => {
  const [sample, setSample] = useRecoilState(sampleState("A"));
  console.log('render A')
  return (
    <div>
      {sample}
      <button onClick={() => setSample(Math.random())}>A에서 바꾸기</button>
    </div>
  );
};

const BComponent = () => {
  const [sample, setSample] = useRecoilState(sampleState("B"));
  console.log('render B')
  return (
    <div>
      {sample}
      <button onClick={() => setSample(Math.random())}>B에서 바꾸기</button>
    </div>
  );
};


//App.js
const App = () => {
  return (
    <div>
      <AComponent />
      <BComponent />
    </div>
  );
};
export default App;


import { atom,useRecoilState } from "recoil";

const sampleState = atom({
  key: "sampleState",
  default: {
    a:"default",
    b:"default"
  },
});


const AComponent = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  console.log('render A')
  return (
    <div>
      {sample.a}
      <button onClick={() => setSample({...sample, a:Math.random()})}>A에서 바꾸기</button>
    </div>
  );
};

const BComponent = () => {
  const [sample, setSample] = useRecoilState(sampleState);
  console.log('render B')
  return (
    <div>
      {sample.b}
      <button onClick={() => setSample({...sample, b:Math.random()})}>B에서 바꾸기</button>
    </div>
  );
};


//App.js
const App = () => {
  return (
    <div>
      <AComponent />
      <BComponent />
    </div>
  );
};
export default App;
*/
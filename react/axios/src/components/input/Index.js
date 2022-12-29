import { useRef } from "react";
import Input from "./Input";

const Index = () => {
  const inputRef = useRef();
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
};

export default Index;

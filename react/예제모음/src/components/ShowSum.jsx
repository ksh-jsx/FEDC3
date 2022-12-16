import { useMemo } from "react";

function sum(n) {
  console.log("start");
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log("finish");
  return result;
}

const ShowSum = ({ label, n }) => {
  const result = useMemo(() => sum(n), [n]);
  return (
    <div>
      {label}: {result}
    </div>
  );
};

export default ShowSum;

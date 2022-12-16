import React from "react";

const Box = React.memo(() => {
  console.log("render box");
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
  };
  return <div style={style}></div>;
});

export default Box;

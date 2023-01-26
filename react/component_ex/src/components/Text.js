import React from "react";

const Text = ({ children, size, strong, color, ...props }) => {
  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: size,
    color,
  };
  return <div style={{ ...props.style, ...fontStyle }}>{children}</div>;
};

export default Text;

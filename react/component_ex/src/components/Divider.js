import React from "react";
import styled from "@emotion/styled";

const Line = styled.hr`
  border: none;
  background-color: #aaa;

  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizontal {
    position: block;
    width: 100%;
    height: 1px;
    vertical-align: middle;
  }
`;

const Divider = ({ type, size, ...props }) => {
  const dividerStyle = {
    margin: type === "vertical" ? "0" : `${size}px 0`,
  };

  return <Line {...props} className={type} style={{ ...dividerStyle, ...props.style }} />;
};

export default Divider;

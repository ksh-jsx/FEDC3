import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16px;
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #aaa;
`;

const Handle = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border: 2px solid #44b;
  background-color: white;
  border-radius: 50%;
  cursor: grab;
`;

const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background-color: #44b;
`;

const Slider = ({ min = 0, max = 100, step = 0.1, defaultValue, onChange, ...props }) => {
  const sliderRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [value, setValue] = useState(defaultValue ? defaultValue : min);

  const handleMouseDown = useCallback(() => {
    setDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;

      const handleOffset = e.pageX - sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.offsetWidth;

      const track = handleOffset / sliderWidth;
      let newValue = min;

      if (track < 0) {
        newValue = min;
      } else if (track > 1) {
        newValue = max;
      } else {
        newValue = Math.round((min + (max - min) * track) / step) * step;
        newValue = Math.min(max, Math.max(min, newValue));
      }
      setValue(newValue);
      onChange && onChange(value);
    };
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [value, min, max, dragging, sliderRef, handleMouseUp, onChange, step]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <SliderContainer ref={sliderRef} {...props}>
      <Rail />
      <Track style={{ width: `${percentage}%` }} />
      <Handle onMouseDown={handleMouseDown} style={{ left: `${percentage}%` }} />
    </SliderContainer>
  );
};

export default Slider;

import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Box } from "../Box";
import {
  BunnySlider,
  BarBackground,
  BarProgress,
  BunnyButt,
  StyledInput,
  SliderLabel,
  SliderLabelContainer,
} from "./styles";
import SliderProps from "./types";

const RangeBreakPoint = styled.ul`
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
  color: #fff;
  left: 12.5%;
  position: absolute;
  width: calc(100% - 7px);
  li {
    position: relative;
    float: left;
    width: 25%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    &:first-child {
      position: absolute;
      left: calc(-25% + 3px);
      pointer-events: none;
      &::before {
        background: #fff;
        z-index: 1;
      }
    }
    &::before {
      position: absolute;
      top: -17px;
      right: 0;
      left: 5px;
      content: "";
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background: #25345E;
      border-radius: 50%;
    }
  }

`

const Slider: React.FC<SliderProps> = ({
  name,
  min,
  max,
  value,
  onValueChanged,
  valueLabel,
  step = "any",
  disabled = false,
  ...props
}) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    onValueChanged(parseFloat(target.value));
  };

  const progressPercentage = (value / max) * 100;
  const isMax = value === max;
  let progressWidth: string;
  if (progressPercentage <= 10) {
    progressWidth = `${progressPercentage}%`;
  } else if (progressPercentage >= 90) {
    progressWidth = `${progressPercentage}%`;
  } else if (progressPercentage >= 60) {
    progressWidth = `${progressPercentage}%`;
  } else {
    progressWidth = `${progressPercentage}%`;
  }
  const labelProgress = isMax ? "calc(100%)" : `${progressPercentage}%`;
  const displayValueLabel = isMax ? "MAX" : valueLabel;
  return (
    <Box position="relative" height="48px" {...props}>
      <RangeBreakPoint>
        <li>0%</li>
        <li>25%</li>
        <li>50%</li>
        <li>75%</li>
        <li>100%</li>
      </RangeBreakPoint>
      <BunnySlider>
        <BarBackground disabled={disabled} />
        <BarProgress style={{ width: progressWidth }} disabled={disabled} />
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
          isMax={isMax}
          disabled={disabled}
          style={{height: 'auto'}}
        />
      </BunnySlider>
    </Box>
  );
};

export default Slider;

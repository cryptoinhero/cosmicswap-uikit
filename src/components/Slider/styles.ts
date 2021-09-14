import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import bunnyHeadMain from "./svg/bunnyhead-main.svg";
import bunnyHeadMax from "./svg/bunnyhead-max.svg";
import bunnyButt from "./svg/bunnybutt.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "pointer";
};

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  // background-image: url(${isMax ? bunnyHeadMax : bunnyHeadMain});
  background-color: #fff;
  border: 0;
  cursor: ${getCursorStyle};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transition: 200ms transform;

  &:hover {
    transform: ${disabled ? "scale(1)" : "scale(1.1)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: 100%;
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  // background: url(${bunnyButt}) no-repeat;
  height: 32px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 15px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  width: 100%;
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: #25345E;
  height: 2px;
  position: absolute;
  top: 7px;
  width: 100%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background: linear-gradient(45deg, #667FF9, #0AEAF2);
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 2px;
  left:2px;
  position: absolute;
  top: 7px;
`;

import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/images/egg/logo.png" alt="logo" {...props}/>
  );
};

export default Icon;

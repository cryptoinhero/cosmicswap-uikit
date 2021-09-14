import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path id="medium" d="M16.726,4.191,18.176,2.8V2.5H13.152L9.571,11.412,5.5,2.5H.229v.3l1.694,2.04a.711.711,0,0,1,.229.593v8.015a.914.914,0,0,1-.245.8L0,16.559v.3H5.411v-.3L3.5,14.246a.942.942,0,0,1-.263-.8V6.518L7.99,16.863h.552L12.626,6.518v8.241c0,.217,0,.262-.142.4l-1.469,1.422v.3h7.128v-.3L16.726,15.2a.421.421,0,0,1-.162-.4V4.6a.419.419,0,0,1,.161-.4Z" transform="translate(0 1.5)"/>
    </Svg>
  );
};

export default Icon;

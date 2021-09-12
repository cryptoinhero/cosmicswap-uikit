import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20.658 17.096" {...props}>
      <g id="Solid" transform="translate(-23.999 -63.999)">
        <path id="Path_21" data-name="Path 21" d="M25.069,69.7H41.01l-1.738,1.738a1.069,1.069,0,0,0,1.511,1.511l3.562-3.562a1.069,1.069,0,0,0,0-1.511l-3.562-3.562a1.069,1.069,0,1,0-1.511,1.511l1.738,1.738H25.069a1.069,1.069,0,1,0,0,2.137Z" transform="translate(-0.001)"/>
        <path id="Path_22" data-name="Path 22" d="M43.588,243.561H27.647l1.738-1.738a1.069,1.069,0,0,0-1.511-1.511l-3.562,3.562a1.069,1.069,0,0,0,0,1.511l3.562,3.562a1.069,1.069,0,1,0,1.511-1.511L27.647,245.7H43.588a1.068,1.068,0,1,0,0-2.137Z" transform="translate(0 -168.164)"/>
      </g>
    </Svg>
  );
};

export default Icon;

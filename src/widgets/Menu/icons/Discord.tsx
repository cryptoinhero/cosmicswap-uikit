import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path id="Path_676" data-name="Path 676" d="M16.933,55.155A15.733,15.733,0,0,0,15.4,51.422,9.418,9.418,0,0,0,11.49,49l-.361.984a11.027,11.027,0,0,1,2.732,1.437,18,18,0,0,0-4.915-.73,18,18,0,0,0-4.915.73,11.027,11.027,0,0,1,2.732-1.437L6.4,49a9.418,9.418,0,0,0-3.915,2.418A15.731,15.731,0,0,0,.956,55.155,34.564,34.564,0,0,0,0,60.972c.061.1,1.467,2.5,5.3,2.5l.971-1.407A10.331,10.331,0,0,1,3.2,60.675l.581-.873a9.345,9.345,0,0,0,10.337,0l.581.873a10.331,10.331,0,0,1-3.076,1.387l.971,1.407c3.833,0,5.239-2.4,5.3-2.5A34.566,34.566,0,0,0,16.933,55.155ZM6.521,57.9H5.473V56.151H6.521Zm5.895,0H11.368V56.151h1.048Z" transform="translate(0 -45.004)"/>
    </Svg>
  );
};

export default Icon;

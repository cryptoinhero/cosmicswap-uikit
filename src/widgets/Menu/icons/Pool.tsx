import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20.658 23.968" {...props}>
      <path id="Path_3" data-name="Path 3" d="M45.342,23.968a5.422,5.422,0,0,0,3.859-1.6c.016-.016.216-.284.229-.3L59.95,7.82a.444.444,0,0,0-.471-.694L56.2,7.993,60.484.668A.444.444,0,0,0,59.81.108L50.8,7.9l.611-1.622a.444.444,0,0,0-.724-.477l-9.208,8.856a5.457,5.457,0,0,0,3.859,9.316Zm0-9.657a4.2,4.2,0,1,1-4.2,4.2A4.2,4.2,0,0,1,45.342,14.311Z" transform="translate(-39.887 0)"/>
      <path id="Path_4" data-name="Path 4" d="M89.909,365.551a2.093,2.093,0,0,1,2.082-2.082.444.444,0,1,0,0-.889,2.975,2.975,0,0,0-2.971,2.971.444.444,0,0,0,.889,0Z" transform="translate(-86.981 -347.533)"/>
    </Svg>
  );
};

export default Icon;


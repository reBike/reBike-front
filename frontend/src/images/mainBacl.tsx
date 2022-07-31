import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={2304}
    height={1296}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" fillOpacity={0.7} d="M0 0h2304v1296H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.00043 .00077)" />
      </pattern>
      <image
        id="b"
        width={2304}
        height={1296}
      />
    </defs>
  </svg>
);
export default SvgComponent;
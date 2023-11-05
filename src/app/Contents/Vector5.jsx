import * as React from "react"
const  Vector5 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={121}
    height={164}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#E3EDF7"
        d="M0 102.885c0 45.216 26.88 61.004 60.04 61.004 33.158 0 60.038-15.788 60.038-61.004C120.078 57.668 60.039.146 60.039.146S0 57.668 0 102.885Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={153.112}
        height={196.777}
        x={-16.517}
        y={-16.371}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={16.517} dy={16.517} />
        <feGaussianBlur stdDeviation={24.775} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.534167 0 0 0 0 0.645967 0 0 0 0 0.749167 0 0 0 0.4 0" />
        <feBlend in2="shape" result="effect1_innerShadow_17_4102" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-16.517} dy={-16.517} />
        <feGaussianBlur stdDeviation={33.034} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend
          in2="effect1_innerShadow_17_4102"
          result="effect2_innerShadow_17_4102"
        />
      </filter>
    </defs>
  </svg>
)
export default Vector5

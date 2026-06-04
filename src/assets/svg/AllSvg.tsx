import type { JSX } from "react";

type IconMap = Record<string, JSX.Element>;

export default function allSvg(width: number | string = 24): IconMap {
  const svg = {
    dropMenu: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <g
          fill="none"
          stroke="currentColor"
          stroke-dasharray="16"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M5 5h14">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="16;0"
            />
          </path>
          <path stroke-dashoffset="16" d="M5 12h14">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.3s"
              dur="0.3s"
              to="0"
            />
          </path>
          <path stroke-dashoffset="16" d="M5 19h14">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.3s"
              to="0"
            />
          </path>
        </g>
      </svg>
    ),
    gitHub: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width= {width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            stroke-dasharray="32"
            d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="32;0"
            />
          </path>
          <path
            stroke-dasharray="10"
            stroke-dashoffset="10"
            d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              to="0"
            />
          </path>
        </g>
      </svg>
    ),
  } satisfies IconMap;

  return svg;
  }
import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCallMeet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V3ZM7.75 16.253C2.587 11.088 2.587 6.57 4.2 4.955c.968-.969 2.384-1.231 3.228-.646.775.517 1.937 1.974 1.937 3.228 0 .757-.558 1.407-1.018 1.943-.325.379-.601.701-.596.963.012.631.707 2.275 2.121 3.689 1.414 1.414 3.058 2.109 3.69 2.121.261.005.583-.27.962-.596.536-.46 1.187-1.018 1.943-1.018 1.254 0 2.711 1.162 3.228 1.937.585.844.323 2.26-.646 3.228-1.614 1.614-6.133 1.614-11.298-3.55ZM14 4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1Zm6 1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCallMeet)

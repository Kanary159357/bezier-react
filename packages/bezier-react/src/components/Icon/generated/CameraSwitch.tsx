import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCameraSwitch(props: SVGProps<SVGSVGElement>) {
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
        d="M9.236 3a3 3 0 0 0-2.683 1.658L6.382 5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-1.382l-.17-.342A3 3 0 0 0 14.763 3H9.236Zm-.894 2.553A1 1 0 0 1 9.236 5h5.528a1 1 0 0 1 .894.553l.448.894A1 1 0 0 0 17 7h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 .894-.553l.448-.894Zm.51 5.634a3.252 3.252 0 0 1 5.667-1.241l-1.075.752a.25.25 0 0 0 .078.446l2.964.805a.25.25 0 0 0 .315-.22l.257-3.06a.25.25 0 0 0-.393-.227l-.915.642a4.752 4.752 0 0 0-8.35 1.73l1.452.373Zm6.294 1.584a3.252 3.252 0 0 1-5.666 1.241l1.075-.752a.25.25 0 0 0-.078-.446l-2.964-.805a.25.25 0 0 0-.315.22l-.257 3.06a.25.25 0 0 0 .392.226l.916-.64a4.752 4.752 0 0 0 8.35-1.73l-1.453-.374Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCameraSwitch)

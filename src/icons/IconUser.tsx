import React, { SVGProps } from 'react'

const SvgIconUser = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <path
      className="fill-current w-12 h-12 group-hover:text-support-positive-800"
      d="M12 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm9 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h8a5 5 0 015 5v2z"
    />
  </svg>
)

export default SvgIconUser

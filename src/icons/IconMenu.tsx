import React, { SVGProps } from 'react'

const SvgIconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <path
      className="fill-current w-12 h-12 group-hover:text-support-positive-800"
      d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
    />
  </svg>
)

export default SvgIconMenu

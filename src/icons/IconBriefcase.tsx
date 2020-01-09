import React, { SVGProps } from 'react'

const SvgIconBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <path
      className="fill-current w-12 h-12 group-hover:text-support-positive-800"
      d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z"
    />
  </svg>
)

export default SvgIconBriefcase

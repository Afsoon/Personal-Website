import React, { SVGProps } from 'react'

const SvgIconGraphBar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <path
      className="fill-current w-12 h-12 group-hover:text-support-positive-800"
      d="M20 22H4a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 012 2v16a2 2 0 01-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"
    />
  </svg>
)

export default SvgIconGraphBar

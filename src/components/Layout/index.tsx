import React from 'react'
import '../../style.css'

const LayoutPage: React.FunctionComponent = ({ children }) => (
  <div className="h-screen w-screen flex flex-col lg:flex-row">{children}</div>
)

export default LayoutPage

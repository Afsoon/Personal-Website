import React from 'react'
import '../../style.css'

const LayoutPage: React.FunctionComponent = ({ children }) => (
  <div className="h-screen w-screen overflow-auto lg:overflow-hidden flex flex-col lg:flex-row">
    {children}
  </div>
)

export default LayoutPage

import React from "react"
import logo from "../assets/logo.png"

function Logo({ width = "120px" }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="DevBlog Logo"
        style={{ width }}
        className="select-none"
      />
    </div>
  )
}

export default Logo

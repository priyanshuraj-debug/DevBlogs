import React, { useEffect } from "react"
import Login from "../components/Login"
import { useDispatch } from "react-redux"
import { hideLoader } from "../store/uiSlice"

function LoginPage() {
  

  return (
    <div className="py-8">
      <Login />
    </div>
  )
}

export default LoginPage

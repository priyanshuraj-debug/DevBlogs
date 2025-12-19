import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'
import { useNavigate } from 'react-router'
import { hideLoader,showLoader } from '../../store/uiSlice.js'
function Logout() {
  
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const logoutHandler = () => {
    dispatch(showLoader()) 
    authService.logout().then(() => {
      dispatch(logout())
      dispatch(hideLoader()) 
      navigate("/") 
    })
  }

  return (
    <button
      onClick={logoutHandler}
      className="
        inline-flex items-center
        px-4 py-2
        rounded-full
        text-sm font-medium
        text-red-400
        transition-all duration-200
        hover:bg-red-500/10 hover:text-red-300
        focus:outline-none
      "
    >
      Logout
    </button>
  )
}

export default Logout

import React from 'react'
import { Signup as SignupComponent } from '../components'
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from 'react'
import { hideLoader } from "../store/uiSlice"

function Signup() {
   const dispatch=useDispatch()
  useEffect(() => {
  dispatch(hideLoader())
}, [])

  return (
    <div className='py-8'>
        <SignupComponent/>
    </div>
  )
}

export default Signup
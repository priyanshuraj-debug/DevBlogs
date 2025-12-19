import React from 'react'
import { Container, PostForm } from '../components/index'
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from 'react'
import { hideLoader } from "../store/uiSlice"
function AddPost() {
   const dispatch=useDispatch()
  useEffect(() => {
  dispatch(hideLoader())
}, [])

  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
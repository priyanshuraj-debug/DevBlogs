import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import service from '../appwrite/appwrite_config'
import { useSelector } from 'react-redux'
import { hideLoader } from '../store/uiSlice'
import { useDispatch } from 'react-redux'
function AllPosts() {
  const [posts, setPosts] = useState([])
  const authStatus = useSelector(state => state.auth.status)
 const dispatch=useDispatch()

  useEffect(() => {
    if (!authStatus) return

    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
        dispatch(hideLoader())
      }
    })
  }, [authStatus])

  return (
    <div className="w-full py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts

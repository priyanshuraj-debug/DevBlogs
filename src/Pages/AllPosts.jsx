import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import service from '../appwrite/appwrite_config'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoader } from '../store/uiSlice'

function AllPosts() {
  const [posts, setPosts] = useState([])
  const authStatus = useSelector(state => state.auth.status)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authStatus) return

    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
      dispatch(hideLoader())
    })
  }, [authStatus, dispatch])

  return (
    <div className="w-full py-12">
      <Container>

        {/* ✅ Empty State */}
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-semibold text-slate-600">
              No posts yet 📭
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Add a post to see it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <div key={post.$id}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}

      </Container>
    </div>
  )
}

export default AllPosts

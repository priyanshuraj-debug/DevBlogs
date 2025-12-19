import React from 'react'
import service from '../appwrite/appwrite_config'
import { Link } from 'react-router'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="
          w-full
          bg-slate-900
          border border-white/10
          rounded-2xl
          p-4
          transition-all duration-300
          hover:scale-[1.02]
          hover:border-white/20
        "
      >
        <div className="w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={service.getFileView(featuredImage).toString()}
            alt={title}
            className="
              w-full h-48 object-cover
              transition-transform duration-300
              hover:scale-105
            "
          />
        </div>

        <h2 className="text-base font-semibold text-slate-100 line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard

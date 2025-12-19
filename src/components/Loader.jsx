import React from "react"

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pointer-events-none">
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-md">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
        <p className="text-sm text-slate-600">Loading...</p>
      </div>
    </div>
  )
}

export default Loader

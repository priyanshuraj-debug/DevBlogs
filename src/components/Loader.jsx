import React from "react"

function Loader() {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-white/80 backdrop-blur">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
        <p className="text-sm text-slate-600">Loading...</p>
      </div>
    </div>
  )
}

export default Loader

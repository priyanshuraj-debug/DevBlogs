import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components/index"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const loader = useSelector((state) => state.ui.loading)

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login(userData))
        else dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {loader && <Loader />}
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App

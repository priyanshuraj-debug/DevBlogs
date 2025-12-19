import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components/index"
import { Outlet } from "react-router"
import Loader from "./components/Loader"
import { useSelector } from "react-redux"
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
const loader = useSelector((state) => state.ui.loading)
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login( userData ))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {loader && <Loader />}
      <Header />

      {/* 👇 main will expand only when content grows */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  ) : null
}

export default App

import React from "react"
import { Container, Button } from "../components"
import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from 'react'
import { hideLoader } from "../store/uiSlice"
function Home() {
  const navigate = useNavigate()
  const authStatus = useSelector((state) => state.auth.status)
  const dispatch=useDispatch()
useEffect(() => {
  dispatch(hideLoader())
}, [])

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="py-28">
        <Container className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            A Modern Blogging Platform for{" "}
            <span className="text-indigo-400">Developers</span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            DevBlog helps developers create, manage and publish technical content
            with a clean editor, secure authentication and a scalable full-stack architecture.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {authStatus ? (
              <>
                <Button onClick={() => navigate("/add-post")}>
                  Write a Post
                </Button>
                <Button
                  bgColor="bg-slate-800"
                  onClick={() => navigate("/all-posts")}
                >
                  Browse Posts
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/signup")}>
                  Get Started Free
                </Button>
                <Button
                  bgColor="bg-slate-800"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
              </>
            )}
          </div>
        </Container>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="py-20 border-t border-white/10">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-100">
                Built for Developers
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                Designed specifically for writing technical and development-focused content.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-100">
                Full-Stack Architecture
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                Secure backend, clean frontend and scalable architecture from day one.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-100">
                Simple & Powerful
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                Focus on writing content while the platform handles everything else.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20">
        <Container className="max-w-6xl">
          <h2 className="text-3xl font-semibold text-center text-slate-100">
            Key Features
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Authentication",
                desc: "Signup, login and session management powered by Appwrite with protected routes."
              },
              {
                title: "Rich Text Editor",
                desc: "Create professional posts using a feature-rich TinyMCE editor with media support."
              },
              {
                title: "Post Management",
                desc: "Create, update, delete and manage posts with image uploads and status control."
              },
              {
                title: "Modern UI & UX",
                desc: "Clean dark-mode SaaS interface built using Tailwind CSS and responsive layouts."
              },
              {
                title: "Redux State Management",
                desc: "Centralized auth and user state using Redux Toolkit for scalability."
              },
              {
                title: "Scalable Codebase",
                desc: "Modular, maintainable architecture with clear separation of concerns."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-900 border border-white/10 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 border-t border-white/10">
        <Container className="max-w-5xl">
          <h2 className="text-3xl font-semibold text-center text-slate-100">
            How It Works
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-indigo-400 text-2xl font-bold">01</span>
              <h3 className="mt-3 font-semibold text-slate-100">
                Create an Account
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Sign up securely and access your personal dashboard.
              </p>
            </div>
            <div>
              <span className="text-indigo-400 text-2xl font-bold">02</span>
              <h3 className="mt-3 font-semibold text-slate-100">
                Write Content
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Use the rich editor to write and format your blog posts.
              </p>
            </div>
            <div>
              <span className="text-indigo-400 text-2xl font-bold">03</span>
              <h3 className="mt-3 font-semibold text-slate-100">
                Publish & Manage
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Publish posts and manage them easily from your account.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 border-t border-white/10">
        <Container className="text-center max-w-4xl">
          <h2 className="text-3xl font-semibold text-slate-100">
            Start Publishing Today
          </h2>
          <p className="mt-4 text-slate-400">
            DevBlog is built to help developers share knowledge with clarity and confidence.
          </p>

          <div className="mt-8">
            <Button onClick={() => navigate(authStatus ? "/add-post" : "/signup")}>
              {authStatus ? "Create a Post" : "Join DevBlog"}
            </Button>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default Home

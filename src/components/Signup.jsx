import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { Button, Input, Logo } from "./index"
import { useForm } from "react-hook-form"
import { login } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const signUp = async (data) => {
    setError("")
    try {
      const account = await authService.createAccount(data)

      if (account) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(login(userData))
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-white/10 p-8 text-slate-100 shadow-xl">
        
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-28">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-400 hover:text-indigo-300 transition"
          >
            Sign in
          </Link>
        </p>

        {/* Error */}
        {error && (
          <p className="mt-6 text-center text-sm text-red-400">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(signUp)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

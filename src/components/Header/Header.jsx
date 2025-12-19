import React from 'react'
import { Container, Logo, Logout } from '../index.js'
import { Link, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ]

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo width="70px" />
          </Link>

          {/* Nav Items */}
          <ul className="flex items-center gap-2">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="
                        px-4 py-2 text-sm font-medium text-slate-200
                        rounded-full
                        transition-all duration-200
                        hover:bg-white/10 hover:text-white
                        focus:outline-none
                      "
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {authStatus && (
              <li className="ml-2">
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header

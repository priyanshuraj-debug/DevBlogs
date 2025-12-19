import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="-m-6 flex flex-wrap">

          {/* Logo + Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-slate-400">
                © Copyright 2023. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Company
            </h3>
            <ul className="space-y-4">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-slate-200 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Support
            </h3>
            <ul className="space-y-4">
              {["Account", "Help", "Contact Us", "Customer Support"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-slate-200 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Legals
            </h3>
            <ul className="space-y-4">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-slate-200 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

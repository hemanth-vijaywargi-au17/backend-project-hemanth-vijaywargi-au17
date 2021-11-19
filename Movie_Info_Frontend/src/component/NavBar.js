import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="flex justify-between bg-gray-900 py-3 px-6 text-gray-400 font-bold">
        {/*Nav Brand*/}
        <div className="flex items-center">
          <svg
            className="w-16 h-16 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            ></path>
          </svg>
          <h1 className="text-3xl font-bold ">Movie Info App</h1>
        </div>
        {/*Navigation*/}
        <nav className="flex space-x-5">
          <form className="flex items-center">
            <div class="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="text-gray-900 w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm bg-gray-400 text-gray-900 rounded-md pl-10"
                placeholder="Search..."
                autocomplete="off"
              />
            </div>
          </form>

          <ul className="flex items-center space-x-5">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}

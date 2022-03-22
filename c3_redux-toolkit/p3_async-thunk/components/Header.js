import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">Redux Toolkit</h1>
      <p>Async Thunk</p>
      <p>
        <Link to="/editor">
          <kbd>👉 새로운 글 게시하기 👈</kbd>
        </Link>
      </p>
    </div>
  </div>
)
export default Header

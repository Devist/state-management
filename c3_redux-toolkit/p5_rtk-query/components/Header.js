import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">Case 28</h1>
      <p>Redux Toolkit - RTK Query</p>
      <p>
        <Link to="/editor">
          <kbd>π μλ‘μ΄ κΈ κ²μνκΈ° π</kbd>
        </Link>
      </p>
    </div>
  </div>
)
export default Header

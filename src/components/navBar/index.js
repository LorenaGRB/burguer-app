import React from 'react'

function NavBar() {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="about">About</Link>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
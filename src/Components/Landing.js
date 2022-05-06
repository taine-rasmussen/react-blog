import React from 'react'
import { Link } from "react-router-dom";

// Components
import StateBlog from './StateBlog'

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-headers">
        <h1>React blog</h1>
        <h3>A home for all things react</h3>
      </div>
      <div>
        <Link to='usestate'>
          <button>useState</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing

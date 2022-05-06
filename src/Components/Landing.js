import React from 'react'
import Button from '../Library/Button'

const Landing = () => {

  const blogLinks = ['useState', 'useEffect', 'useMemo']


  return (
    <div className="landing-container">
      <div className="landing-headers">
        <h1>React blog</h1>
        <h3>A home for all things react</h3>
      </div>
      <div>
        {blogLinks.map(link => (<Button text={link} path={link} />))}
      </div>
    </div>
  )
}

export default Landing

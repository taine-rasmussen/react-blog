import React, { useState } from 'react'
import Button from '../Library/Button'

const Landing = () => {
  const [darkMode, setDarkMode] = useState(false)
  const blogLinks = ['useState', 'useEffect', 'useMemo']

  const themeStyles = {
    color: darkMode ? '#fff' : '#000',
    backgroundColor: darkMode ? '#000' : '#fff'
  }

  return (
    <div className="landing-container" style={themeStyles}>
      <div className="landing-headers">
        <h1>React blog</h1>
        <h3>A home to learn about  all things react</h3>
        <button
          onClick={() => { setDarkMode(prevDarkMode => !prevDarkMode) }}
        >Dark</button >
      </div>
      <div>
        {blogLinks.map(link => (<Button text={link} path={link} />))}
      </div>
    </div>
  )
}

export default Landing

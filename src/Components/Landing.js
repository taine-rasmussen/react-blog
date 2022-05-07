import React, { useState } from 'react'
import Button from '../Library/Button'
import '../Styles/Landing.css'

const Landing = () => {
  const [darkMode, setDarkMode] = useState(true)
  const blogLinks = ['useState', 'useEffect', 'useMemo']

  const themeStyles = {
    color: darkMode ? '#fff' : '#000',
    backgroundColor: darkMode ? '#000' : '#fff'
  }

  return (
    <div className="landing-container" style={themeStyles}>
      <div className="darkmode-container">
        <button
          onClick={() => { setDarkMode(prevDarkMode => !prevDarkMode) }}
        >Dark</button >
      </div>
      <div className="landing-headers">
        <div className="header-title">
          <h1>React blog</h1>
        </div>
        <div className="header-subheader">
          <h3>A home to learn about  all things react</h3>
        </div>
      </div>
      <div className='landing-body'>
        {blogLinks.map(link => (
          <div className='landing-item' key={link}>
            <Button text={link} path={link} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing

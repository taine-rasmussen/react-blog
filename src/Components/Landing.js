import React, { useState } from 'react'
import Button from '../Library/Button'
import '../Styles/Landing.css'

const Landing = () => {
  const [darkMode, setDarkMode] = useState(true)
  const blogLinks = [
    { name: 'useState', description: 'The useState hook allows us to create state variables in a React function component.' },
    { name: 'useEffect', description: 'The useEffect hook lets us perform side effects in function components.' },
    { name: 'useMemo', description: 'useMemo is very similar to useCallback and helps improve performance. But instead of being for callbacks, it is for storing the results of expensive operations.' },
  ]

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
        {blogLinks.map(hook => (
          <div className='landing-item' key={hook.name}>
            <Button text={hook.name} path={hook.name} />
            <p>{hook.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing

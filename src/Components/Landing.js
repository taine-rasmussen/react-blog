import React, { useState, useMemo } from 'react'
import LinkButton from '../Library/LinkButton'
import '../Styles/Landing.css'
import { DiReact } from 'react-icons/di';
import Nav from '../Library/Nav'

const Landing = (props) => {
  const {
    darkMode,
    setDarkMode
  } = props

  const blogLinks = ['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef', 'useReducer', 'useContext', 'useLayoutEffect', 'Custom Hooks']
  const themeStyles = {
    color: darkMode ? '#61DAFB' : '#202329',
    backgroundColor: darkMode ? '#202329' : '#fff'
  }

  return (
    <div className="landing-container" style={themeStyles}>
      <div className="landing-toggle">
        <button
          className="darkmode-toggle"
          onClick={() => { setDarkMode(prevDarkMode => !prevDarkMode) }}
        >{<DiReact />}</button >
      </div>
      <div className="landing-headers">
        <div
          className="header-title"
          style={{ color: darkMode ? '#61DAFB' : '#202329' }}
        >
          <h1>React blog</h1>
        </div>
        <div
          className="header-subheader"
          style={{ color: darkMode ? '#fff' : '#202329' }}
        >
          <h3>A home to learn about  all things React</h3>
        </div>
      </div>
      <div className='landing-body'>
        {blogLinks.map(hook => (
          <div className='landing-item-container' key={hook}>
            <LinkButton
              text={hook}
              path={hook}
              darkMode={darkMode}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Landing

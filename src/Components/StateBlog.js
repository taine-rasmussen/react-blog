import React from 'react'
import SyntaxHighLighter from 'react-syntax-highlighter';
import { DiReact } from 'react-icons/di';
import '../Styles/State.css'

import Textbox from '../Library/Textbox'
import Nav from '../Library/Nav'
import { pojoaque } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import stateCopy from '../Copy/State'

const StateBlog = (props) => {
  const {
    darkMode,
    setDarkMode
  } = props

  const themeStyles = {
    color: darkMode ? '#61DAFB' : '#202329',
    backgroundColor: darkMode ? '#202329' : '#fff'
  }

  return (
    <div className="stateblog-container" style={themeStyles}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="stateblog-header">
        <h1>useState</h1>
      </div>
      <div className="stateblog-body">
        <h3 style={{ color: darkMode ? '#61DAFB' : '#202329' }}>Getting started</h3>
        <Textbox text={stateCopy.gettingStarted} darkMode={darkMode} />
        <div className="stateblog-code">
          <SyntaxHighLighter language="javascript" style={pojoaque}>
            {"import { useState } from 'react'"}
          </SyntaxHighLighter>
        </div>
        <Textbox text={stateCopy.setup} darkMode={darkMode} />
        <SyntaxHighLighter language="javascript" style={pojoaque}>
          {"const [count, setCount] = useState(4)"}
        </SyntaxHighLighter>
        <Textbox text={stateCopy.countExample} darkMode={darkMode} />
        <SyntaxHighLighter language="javascript" style={pojoaque}>
          {"const incrementCount = () => { setCount(prevCount => prevCount + 1)}"}
        </SyntaxHighLighter>
      </div>
    </div>
  )
}

export default StateBlog

import React from 'react'
import SyntaxHighLighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { DiReact } from 'react-icons/di';
import '../Styles/State.css'

import Textbox from '../Library/Textbox'
import LinkButton from '../Library/LinkButton'
import { pojoaque } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const StateBlog = (props) => {
  const {
    darkMode,
    setDarkMode
  } = props

  const exampleText = 'this is some example text about useState'
  const themeStyles = {
    color: darkMode ? '#61DAFB' : '#202329',
    backgroundColor: darkMode ? '#202329' : '#fff'
  }

  return (
    <div className="stateblog-container" style={themeStyles}>
      <div className="stageblog-nav darkmode-container">
        <LinkButton text={'Home'} path={'/'} darkMode={darkMode} />
        <button
          onClick={() => { setDarkMode(prevDarkMode => !prevDarkMode) }}
        >{<DiReact />}</button >
      </div>
      <div className="stateblog-header">
        <h1>useState</h1>
      </div>
      <div className="stateblog-body">
        <Textbox text={exampleText} />
        <SyntaxHighLighter language="javascript" style={pojoaque}>
          {
            "const func = () => {}"
          }
        </SyntaxHighLighter>
      </div>
    </div>
  )
}

export default StateBlog

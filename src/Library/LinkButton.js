import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

const LinkButton = (props) => {
  const {
    text,
    path,
    darkMode
  } = props

  return (
    <>
      <Link to={path}>
        <button
          className="link-button"
          style={{
            color: darkMode ? '#61DAFB' : '#202329',
            border: '2px solid #202329',
            backgroundColor: darkMode ? '#32363E' : '#fff',
          }}
        >{text}</button>
      </Link>
    </>
  )
}

export default LinkButton

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
          style={{ color: '#202329' }}
        >{text}</button>
      </Link>
    </>
  )
}

export default LinkButton

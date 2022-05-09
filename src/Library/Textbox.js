import React from 'react'

const Textbox = (props) => {

  const {
    text,
    darkMode
  } = props

  return (
    <div className="textbox-container" style={{ color: darkMode ? '#fff' : '#202329' }}>
      <p>{text}</p>
    </div>
  )
}

export default Textbox

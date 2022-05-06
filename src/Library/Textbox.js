import React from 'react'

const Textbox = (props) => {

  const {
    text
  } = props

  return (
    <div className="textbox-container">
      <p>{text}</p>
    </div>
  )
}

export default Textbox

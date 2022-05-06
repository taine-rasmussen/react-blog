import React from 'react'
import { Link } from "react-router-dom";
import Textbox from '../Library/Textbox'
import Button from '../Library/Button'

const StateBlog = () => {


  const exampleText = 'this is some example text about useState'

  return (
    <div className="stateblog-container">
      <div>
        <h1>useState</h1>
        <Button text={'Home'} path={'/'} />
      </div>
      <div className="stateblog-body">
        <Textbox text={exampleText} />
      </div>
    </div>
  )
}

export default StateBlog

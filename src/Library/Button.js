import React from 'react'
import { Link } from "react-router-dom";


const Button = (props) => {

   const {
      displayText,
      path
   } = props

   return (
      <>
         <Link to={path}>{displayText}</Link>
      </>
   )
}

export default Button

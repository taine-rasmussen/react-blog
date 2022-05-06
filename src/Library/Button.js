import React from 'react'
import { Link } from "react-router-dom";

const Button = (props) => {

   const {
      text,
      path
   } = props

   return (
      <>
         <Link to={path}><button>{text}</button></Link>
      </>
   )
}

export default Button

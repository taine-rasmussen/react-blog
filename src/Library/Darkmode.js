import React from 'react'
import { DiReact } from 'react-icons/di';
import '../App.css'


const Darkmode = (props) => {
   const {
      setDarkMode,
   } = props

   return (
      <>
         <button
            className="darkmode-toggle"
            onClick={() => { setDarkMode(prevDarkMode => !prevDarkMode) }}
         >{<DiReact />}</button >
      </>
   )
}

export default Darkmode

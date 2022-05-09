import React from 'react'
import { DiReact } from 'react-icons/di';
import '../App.css'
import LinkButton from './LinkButton'

const Nav = (props) => {
   const {
      darkMode,
      setDarkMode
   } = props

   console.log(props)

   return (
      <div className="nav-container">
         <LinkButton
            text={'Home'}
            path={'/'}
            darkMode={darkMode}
         />
         <button
            className="darkmode-toggle"
            onClick={() => { setDarkMode(prevDarkMode => !prevDarkMode) }}
         >{<DiReact />}</button >
      </div>
   )
}

export default Nav

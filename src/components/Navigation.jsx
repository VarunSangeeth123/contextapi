import React, { useContext } from 'react'
import { ThemeContext } from '../context/themecontext'
import { AuthContext } from '../context/AuthContext'

const Navigation=()=> {
    const {isLightTheme,dark,light}=useContext(ThemeContext)
    const {isAuthenticated,toggleAuth}=useContext(AuthContext)
    const theme=isLightTheme?light:dark
  
    return (
      <>
      <div>{isAuthenticated ?"loggedin":"loggedout"}</div>
      <button onClick={toggleAuth}>{isAuthenticated ?"loggedin":"loggedout"}</button>
        <nav style={{background:theme.ui,color:theme.syntax}}>
     <ul >
     <li>home</li>
     <li>about</li>
     <li>contact</li>
     <li>portfolio</li>
   </ul>
     </nav>  
      </>
   

      
    )
  }


export default Navigation
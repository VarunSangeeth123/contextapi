import React, {  useContext } from 'react'
import { ThemeContext } from '../context/themecontext'

const ThemeToggle =()=> {
    const {toggleTheme}=useContext(ThemeContext)

    return <button className='toggle-btn' onClick={toggleTheme}>Toggle</button>
  }


export default ThemeToggle
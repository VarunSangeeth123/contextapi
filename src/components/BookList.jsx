import React, {useContext} from 'react'
import { ThemeContext } from '../context/themecontext'
import {BookContext} from'../context/BookContext'


const BookList=()=> {
  const {book}=useContext(BookContext)
  const {isLightTheme,dark,light}=useContext(ThemeContext)
    const theme=isLightTheme?light:dark;
    return (
      <div className='book-list'  style={{background:theme.bg,color:theme.syntax}}>
    <ul>
      {book.map(({id,title})=><li style={{background:theme.ui}} key={id}>{title}</li>)}
    </ul>
      </div>
  
    )
  }


export default BookList
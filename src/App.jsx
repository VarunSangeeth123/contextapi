import React, { Component } from 'react'
import Navigation from './components/Navigation'
import BookList from './components/BookList'
import ThemeContextProvider from './context/themecontext'
import ThemeToggle from './components/themeToggle'
import AuthContextProvider from './context/AuthContext'
import BookContextProvider from './context/BookContext'

export class App extends Component {
  render() {
    return (
      <>
      <AuthContextProvider>
      <ThemeContextProvider>
      <Navigation/>
      <BookContextProvider>
      <BookList/>
      </BookContextProvider>
      <ThemeToggle/>
      </ThemeContextProvider>
      </AuthContextProvider>
     
      
      </>
   
    )
  }
}

export default App
import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const[theme , setTheme] = useState('dark')

  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <div>
      <h1>theme is {theme}</h1>
      <Navbar changeTheme={changeTheme} />
    </div>
  )
}

export default App

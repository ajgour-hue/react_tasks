import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeDataContext)

  return (
    <div className='nav'>
      <h1>Navbar {theme}</h1>

      <button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        Change themes
      </button>
    </div>
  )
}

export default Navbar

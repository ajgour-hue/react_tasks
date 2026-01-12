import React, { useContext } from 'react'
import { PostDataContext } from '../context/PostDataContext'
import { ThemeDataContext } from '../context/ThemeContext'

const Section = () => {
  const { theme, setTheme } = useContext(ThemeDataContext)
  const data = useContext(PostDataContext)

  return (
    <div className='section'>
      <h1>Section {data}</h1>
      <p>{theme}</p>
    </div>
  )
}

export default Section

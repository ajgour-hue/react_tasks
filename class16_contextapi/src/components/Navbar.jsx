import React from 'react'
import { useState } from 'react'

const Navbar = (props) => {
    const[newTheme , setNewTheme] = useState('')
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme)
            setNewTheme('')
        }}>
            <input
            value={newTheme}
            onChange={(e)=>{
                setNewTheme(e.target.value)
            }}
             type="text" placeholder='search here...' />
            <button>Change theme</button>
        </form>
    </div>
  )
}

export default Navbar
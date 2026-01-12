import React, { createContext } from 'react'
import App from '../App'
  export  const UserDataContext = createContext()

const UserContext = () => {
    
 const user = 'ajay'
  return (
    <div>
      <UserDataContext.Provider value={user}>
        <App />
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext

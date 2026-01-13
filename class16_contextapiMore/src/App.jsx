import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* link navlink and a tag are same */}
      {/* <Navbar > 
       <h1>this is children od nav</h1> 
       <h1>this is another children od nav</h1> 
      </Navbar> */}
      <Navbar />
      <Section />
      <Footer  />
    </div>
  )
}

export default App

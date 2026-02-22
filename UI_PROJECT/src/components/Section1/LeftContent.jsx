import React from 'react'
import HomeText from './HomeText'
import Btn from './Btn'

const LeftContent = () => {
  return (
    <div className=' w-1/3 h-full flex flex-col justify-between'>
     <HomeText />
     <Btn />
    </div>

  )
}

export default LeftContent
import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className=' flex w-full py-8 px-18 gap-5 h-[90vh]'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1content

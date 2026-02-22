import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className=' flex w-full py-8 px-18 gap-5 h-[90vh]'>
      <LeftContent />
      <RightContent users = {props.users} />
    </div>
  )
}

export default Page1content

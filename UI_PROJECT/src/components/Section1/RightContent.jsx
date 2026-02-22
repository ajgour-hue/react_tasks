import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className=' flex gap-5 items-center  w-2/3 h-[76vh]'>
    { props.users.map(function(elem){
      return <RightCard img = {elem.img} tag={elem.tag}/>
    })}
    </div>
  )
}

export default RightContent
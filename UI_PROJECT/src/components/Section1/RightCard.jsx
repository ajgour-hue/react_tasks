import React from 'react'

const RightCard = (props) => {
  return (
    <div className=' relative rounded-4xl h-full w-1/3 bg-red-700 overflow-hidden'>
       <img className='  h-full w-full object-cover' src={props.img} alt="" />

      <div className=' flex flex-col justify-between p-8 absolute top-0 left-0 h-full w-full  '>
        <h2 className='  rounded-full w-10 h-10  bg-white flex justify-center items-center'>{props.tag}</h2>
        <div className='flex flex-col gap-5'>
            <p className=' text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam illo velit Voluptatibus libero facere odit.</p>
            <div>
                <button className=' cursor-pointer rounded-full bg-gray-200 px-6 py-2 tracking-widest text-sm'>Satisfied</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default RightCard
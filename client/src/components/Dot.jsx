import React from 'react'

function Dot() {
  return (
    <div className='absolute flex '>
    <div className=' m-1 text-xl font-bold w-4 h-4 rounded-full bg-red-600 hover:bg-amber-300'></div>
    <div className=' m-1 text-xl font-bold w-4 h-4 rounded-full bg-yellow-300 hover:bg-amber-300'></div>
    <div className=' m-1 text-xl font-bold w-4 h-4 rounded-full bg-green-500 hover:bg-amber-300'></div>
    </div>
  )
}

export default Dot
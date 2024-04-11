import React, { useState } from 'react'
import Blitz from './Blitz';
import Normal from './Normal';

function DataFlowEvent() {
    const [showBlitz,setShowBlitz]=useState(true);
const[showNormal,setShowNormal]=useState(false);
const handleBlitz=()=>{
    setShowBlitz(true);
    setShowNormal(false);
};
const handleNormal=()=>{
    setShowBlitz(false);
    setShowNormal(true);
};


  return (
    <>
    <div className='h-[100vh] w-full bg-slate-900  text-white justify-center  '>
<h1 className='text-center text-[3rem] font-semibold'>This is practice of react</h1>
<div className='w-full h-auto px-20 py-16 grid grid-cols-3 gap-10 bg-zinc-700'>
              
<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MZpf2ygjWgN-llMoJWVHyEuXIMt37E761A&s' />
<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MZpf2ygjWgN-llMoJWVHyEuXIMt37E761A&s' />
<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MZpf2ygjWgN-llMoJWVHyEuXIMt37E761A&s' />
            </div>
<div className='flex gap-4 justify-center'>
            <button onClick={()=>handleBlitz()} className='h-[3rem] w-[7rem] rounded font-bold  border-2'>Blitz</button>
            <button onClick={()=>handleNormal()} className='h-[3rem] w-[7rem] rounded font-bold  border-2'>NormalTask</button></div>
            {showBlitz && <Blitz/>}
            {showNormal && <Normal/>}
    </div>
    
    </>
  )
}

export default DataFlowEvent
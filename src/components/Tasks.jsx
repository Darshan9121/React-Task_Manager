import React from 'react';
import {IconPencilCog} from "@tabler/icons-react";
import {IconTrash} from "@tabler/icons-react";
import {IconCircleDashedCheck} from "@tabler/icons-react";


const Tasks = () => {
  return(
    <div className=' w-full flex flex-col gap-6  justify-evenly items-center  border-none rounded-lg  bg-white md:px-24 md:py-6 md:w-2/3 md:items-start'>
    <p className='border-b-2 text-2xl font-bold'>All Tasks</p>
    <section className='flex w-full gap-2 md:gap-1'>
    <input type="text" name='search' placeholder='Search here!' className='p-2 border-2 border-black rounded-md placeholder:text-center placeholder:text-gray-600 md:w-full '/>
    <button className='p-2 border-2 border-black rounded-b-lg rounded-tr-lg'>Save</button>
    </section>
    <ul className='flex flex-col gap-6 justify-evenly items-start w-full '>
      <li className='border-b-2 w-full flex flex-row gap-1 justify-between '> 
   <section className='flex gap-2 items-center'>
   <IconCircleDashedCheck/>
<span>T1</span> 
<span className='hidden md:block'>Time</span>
</section>
      <section className='flex gap-4 px-2'>
      <IconPencilCog/>
      <IconTrash/>
      </section>
      </li>
      <li className='border-b-2 w-full flex flex-row gap-1 justify-between '>
      <section className='flex gap-2 items-center'>
      <IconCircleDashedCheck/>
        <span>T2</span> 
        <span className='hidden md:block'>Time</span>
        </section>
      <section className='flex gap-4 px-2'>
      <IconPencilCog/>
      <IconTrash/>
      </section>
      </li>
      <li className='border-b-2 w-full flex flex-row gap-1 justify-between '> <section className='flex gap-2 items-center'>
      <IconCircleDashedCheck/>
<span>T3</span> 
<span className='hidden md:block'>Time</span>
</section>
      <section className='flex gap-4 px-2'>
      <IconPencilCog/>
      <IconTrash/>
      </section>
      </li>
 
    
    </ul>
  </div>
  ) 
}

export default Tasks
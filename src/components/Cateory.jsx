import React from 'react';
import {IconSquareRoundedPlus} from "@tabler/icons-react";

const Cateory = () => {

  if(false){

  return (
    <div>
      <p>All Categories</p>
      <ul>
        <li>CA1</li>
        <li>CA2</li>
        <li>CA3</li>
      </ul>
    </div>
  )
}

else{
  return(  <div className='flex flex-col gap-4 text-center border-r-2 border-b-2 bg-white  rounded-lg md:items-center md:justify-center md:px-12 md:pt-0 md:w-3/12 '>
    <p className='text-2xl text-wrap border-b-2 font-bold'>All Categories</p>
    <ul className='flex flex-row flex-wrap justify-evenly md:flex-col md:justify-evenly md:gap-2  md:items-center'>
        <li><span class="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 ring-1 ring-inset ring-gray-500/10">CA1</span></li>
        <li><span class="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 ring-1 ring-inset ring-gray-500/10">CA2</span></li>
        <li><span class="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 ring-1 ring-inset ring-gray-500/10">CA3</span></li>
        <li><span class="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 ring-1 ring-inset ring-gray-500/10">CA4</span></li>
        <li><span class="inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 ring-1 ring-inset ring-gray-500/10">CA5</span></li>
        <li><IconSquareRoundedPlus/></li>
      </ul>
  </div>
    )
}}

export default Cateory;
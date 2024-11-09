"use client"

import React from 'react';
import { TfiMenu } from "react-icons/tfi";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { GrGift } from "react-icons/gr";
import CategoriesDropDown from '@/component/CategoriesDropDown/CategoriesDropDown';
import { useState } from 'react';




const Navbar = () => {

  const [ categoryVisible, setCategoryVisible] = useState(false) 

  function update(){
    setCategoryVisible(!categoryVisible)
  }
  return (
    <>
    <div>
    <header className='relative flex items-center px-8 justify-between space-x-2 py-1.5 gap-0'>
          <a href ="#">
            <img src ='esty logo.png' className="w-10"/>
          </a>
          
          <h3 className='flex space-x-10 gap-2 font-sans font-semibold items-center hover:bg-gray-100 rounded-full px-5 py-3 transition-all text-sm cursor-pointer'  onClick={update}><TfiMenu size={18}/> Categories </h3>
           {
            categoryVisible && <CategoriesDropDown/>
           }
          <div className='relative flex w-full max-w-[52rem] gap-0'>
            <input
                type="text"
                className="placeholder-gray-400 text-gray-900 p-4 flex py-3 px-5 space-x-30 min-w-full rounded-full right-1 top-10 border border-solid border-gray-950"
                placeholder="Search for anything"/>
            <button className="bg-orange-600 hover:bg-orange-300 py-2 px-2 rounded-full transition-all text-white flex hover:rounded-s-md space-x-4 p-8 border-0 !absolute right-1 top-1">
              <a href ="#"><IoSearchSharp size={25}/></a></button>
            </div>
  <ul className='flex justify-between items-center text-base xl:flex gap-0'>
          <li className='hover:bg-gray-100 rounded-full px-4 py-3 transition-all text-sm'>
            <a href='#'>
              Sign In
            </a>
          </li>
        <li className='hover:bg-blue-200 rounded-full px-3 py-3 transition-all '>
          <a href ="#">
              <PiShoppingCartLight size={25}/></a>
        </li>

        <li className='hover:bg-blue-200 rounded-full px-3 py-3 transition-all' >
        <a href ="#">
        <FaRegHeart size={25}/></a>
        </li>
        <li className='hover:bg-blue-200 rounded-full px-3 py-3 transition-all' >
          <a href ="#">
          <GrGift size={25}/></a>
          </li>
          </ul>
          </header>
     
      <div className='px-0 py-0  border-b-2 border-gray-300'>
 <ul className='flex items-center justify-center gap-5 font-sans pb-0.5 space-y-0 font-semibold text-sm '>
          <li><a href="">
            <h3 className='flex items-center gap-2 hover:bg-gray-100 px-2.5 py-2.5 rounded-full  transition-all' >
          <GrGift size={15}/> Gift Mode</h3>
            </a>
            </li>
           <li> <a href=""> <h3 className='hover:bg-gray-100 px-3 py-3 rounded-full transition-all'>Shop Birthday Gifts</h3></a></li>
           <li> <a href=""> <h3 className='hover:bg-gray-100 px-3 py-3 rounded-full transition-all'>Home Favorites</h3></a></li>
           <li> <a href=""> <h3 className='hover:bg-gray-100 px-3 py-3 rounded-full transition-all'>Fashion Finds</h3></a></li>
           <li> <a href=""> <h3 className='hover:bg-gray-100 px-3 py-3 rounded-full transition-all'>Registry</h3></a></li>
            </ul>
            </div>
      </div>
  </>
  )
}

export default Navbar

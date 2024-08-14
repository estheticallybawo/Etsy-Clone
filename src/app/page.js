
"use Client"
import React from 'react';
import { TfiMenu } from "react-icons/tfi";
import Link from 'next/link';
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { ImGift } from "react-icons/im";

const page = () => {
  return (
    <div>
    <header className='flex justify-between items-center py-6 px-6 space-x-4 md:px-32 gap-4'>
          <a href ="#">
            <img src ='esty logo.png' className='w-20'/>
          </a>
        
          <h3 className='flex space-x-4'><TfiMenu /> Categories </h3>
          
            <input
                type="text"
                className="placeholder-gray-400 text-gray-900 p-4 flex space-x-30 w-96 rounded-lg"
                placeholder="Search for anything"/>
            <button className="bg-orange-600 hover:bg-orange-300 hover:rounded-lg transition-all text-white flex space-x-4 p-4"><IoSearchSharp /></button>
  <ul className='flex justify-between items-center text-base xl:flex gap-6'>
          <li className='hover:bg-gray-400 rounded-full px-4 py-3 transition-all'>
            <a href='#'>
              Sign In
            </a>
          </li>
        <li className='hover:bg-blue-200 rounded-full px-3 py-3 transition-all '>
          <a href ="#">
              <PiShoppingCartLight /></a>
        </li>
        <li className='hover:bg-blue-200 rounded-full px-3 py-3 transition-all' >
          <a href="#">
              <FaRegHeart /></a>
        </li>
        <li className='hover:bg-blue-200 rounded-full px-3 py-3 transition-all' >
          <a href="#">
          <ImGift /></a>
          </li>
          </ul>
 
      </header>
      <div>
 <ul className='flex justify-between items-center'>
          <li><a href="">
            <h3><ImGift /> Gift Mode</h3>
            </a>
            </li>
           <li> <a href=""> <h3>Shop Birthday Gifts</h3></a></li>
           <li> <a href=""> <h3>Home Favorites</h3></a></li>
           <li> <a href=""> <h3>Fashion Finds</h3></a></li>
           <li> <a href=""> <h3>Registry</h3></a></li>
            </ul>
            </div>
      </div>
  )
}

export default page

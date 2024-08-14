
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
    <nav >
      
      <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className='Logo'>
          <Link href ="/">
            <img src ="esty logo.png"/>
          </Link>
        
          <h3 className='flex space-x-4'><TfiMenu /> Categories </h3>
          <Link href ="">
          <PiShoppingCartLight />
          </Link>
          <Link href="">
          <FaRegHeart />
          </Link>
          <Link href="">
          <ImGift />
          </Link>
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 p-4"
                placeholder="Search for anything"/>
            <button className="bg-orange-600 text-white p-4"><IoSearchSharp /></button>

            <Link href="">
            <h3 className='flex space-x-4 '><ImGift /> Gift Mode</h3>
            </Link>
           
            <Link href=""> <h3>Shop Birthday Gifts</h3></Link>
            <Link href=""> <h3>Home Favorites</h3></Link>
            <Link href=""> <h3>Fashion Finds</h3></Link>
            <Link href=""> <h3>Registry</h3></Link>
        </div>
  
      </div>
      </div>
      </nav>

  )
}

export default page

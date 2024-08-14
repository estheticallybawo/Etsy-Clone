"use client"
import React from 'react';
import { LuMenu } from "react-icons/lu";
import Link from 'next/link';

const navbar = () => {
  return (
    <header>
        <div className='Logo'>
          <Link to ="/">
            <img src ="esty logo.png"/>
          </Link>
        <nav>
        <LuMenu />
        </nav>
      </div>

    </header>
    
  )
}

export default navbar

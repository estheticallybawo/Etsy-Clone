 "use client"

import React from 'react';
import Navbar from './Navbar';
import Latest from '@/component/Hero/Latest';
import Cards from '@/component/Cards';


const page = () => {
  return(
    <>
    <Navbar />
    <Latest />
    <Cards />
    </>
  )
}

export default page

"use Client"
import React from "react";




const Latest = () => {
return (
     <>
     <div>
          <h1 className="flex justify-center text-xl pt-20">Discover the latest trends from small shops</h1>
     <div className="flex justify-center ">
          <ul className="flex justify-between items-center text-base xl:flex gap-5">
               <li><a href="">
                    <img src="felted decor.avif" width="100px" className="rounded-full"/>
                         Felted Decor</a>
               </li>
               <li><a href="#" className="align-bottom">
                    <img src="rings.avif" width="100px" className="rounded-full"/>
                         Vintage </a>
               </li>
               <li><a href="">
                    <img src="chunky blanket.avif" width="100px" className="rounded-full"/>
                         Chunky Blanket</a>
               </li>
               <li><a href="">
                    <img src="bangles.avif" width="100px"className="rounded-full"/>
                         Bangles</a>
               </li>
               <li><a href="">
                    <img src="grandpacore.avif" width="100px" className="rounded-full"/>
                         Grandpacore</a>
               </li>
               <li><a href="">
                    <img src="jacket.avif" width="100px" className="rounded-full"/>
                         Vintage Trench Coats </a>
               </li>
          </ul>
     </div>
     </div>
     </>
)
}

export default Latest
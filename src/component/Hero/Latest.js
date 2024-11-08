"use Client"
import React from "react";
import styles from "./latest.module.css";




const Latest = () => {
return (
     <>
     <main className="hero--section">
     <div>
          <h1 className="flex justify-center mb-5 leading-normal text-xl pt-20">Discover the latest trends from small shops</h1>
     <div className="flex justify-center ">
          <ul className="flex justify-between items-center text-base xl:flex gap-5">
               <li><a href="">
                    <img src="warm.avif" width="100px" className="rounded-full"/>
                         <p className="text-center">Warm Minimalism </p>
                         </a>
               </li>
               <li><a href="#" className="align-bottom">
                    <img src="rings.avif" width="100px" className="rounded-full"/>
                       <p> Vintage Rings </p></a>
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
     </main>
     </>
)
}

export default Latest
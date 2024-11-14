"use Client"
import React from "react";
import Styles from "./latest.module.css";



const Latest = () => {
return (
     <>
     <main className={Styles.hero}>

     <div className={Styles.herotext}>
          <h2 className="flex justify-center mb-5 leading-normal text-xl pt-10">Discover the latest trends from small shops</h2>
          </div>
     <div className="flex justify-center gap-4 ">
          <ul className="flex justify-center items-center text-base xl:flex gap-5">
               <li className={Styles.list}><a href="">
                    <img  src="warm.avif" width="160px" className="rounded-full align-middle"/>
                         <p className="text-center">Warm Minimalism </p>
                         </a>
               </li>
               <li className={Styles.list}><a href="#">
                    <img  src="rings.avif" width="160px" className="rounded-full"/>
                       <p> Vintage Rings </p></a>
               </li>
               <li className={Styles.list}><a href="">
                    <img src="chunky blanket.avif" width="160px" className="rounded-full"/>
                        <p>Chunky Blanket</p> </a>
               </li>
               <li className={Styles.list}><a href="">
                    <img src="bangles.avif" width="160px"className="rounded-full "/>
                        <p>Bangles</p> </a>
               </li>
               <li className={Styles.list}><a href="">
                    <img src="grandpacore.avif" width="160px" className="rounded-full"/>
                         <p>Grandpacore</p></a>
               </li>
               <li className={Styles.list}><a href="">
                    <img  src="jacket.avif" width="160px" className="rounded-full"/>
                        <p>Vintage Trench Coats</p>  </a>
               </li>
          </ul>
     </div>
     </main>
     </>
)
}

export default Latest
import React from 'react'
import { data } from '@/utils/categoryData'
import styles from './categoriesdropdown.module.css'

const CategoriesDropDown = () => {
  return (
    <div className={styles.container}>
      {
          data.map((item, index, array) => (
           <a href='#'><li className={styles.list}>{item.title}</li></a> 
          ))
      }
    </div>
  )
}

export default CategoriesDropDown

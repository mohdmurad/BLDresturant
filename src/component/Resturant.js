import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((curElem)=>{
    return curElem.category
  })), "All",]





const Resturant = () => {

  const [menuData, setmenuData]  = useState(Menu)
  // eslint-disable-next-line
  const [menuList, setMenuList]  = useState(uniqueList)


  const filterItem = (category)=>{
    if(category==="All"){
      setmenuData(Menu)
      return
    }
    const updatedList = Menu.filter((curElem)=>{
          return category ===curElem.category
    })
    setmenuData(updatedList)
  }
  return (
    <>
   <Navbar filterItem={filterItem} menuList={menuList}/>
  <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
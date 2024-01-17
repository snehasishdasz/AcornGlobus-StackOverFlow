import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineGlobal, AiOutlineTeam, AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi2";
import "./LeftSideBar.scss"
const LeftSideBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <div className='leftSidebar-section'>
      <div className="leftSidebar-container">
        <div className="left-navbar">
          <a href="/"> <AiOutlineHome size={20} /> <p> Home </p></a>
          <div className="menu-item" onClick={toggleSubMenu}>
            <AiOutlineGlobal size={20} />
            <p> Public </p>
            {showSubMenu ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showSubMenu && (
              <div className="sub-menu">
                <a href="/" id='active'> Questions </a>
                <a href="/"> Tags </a>
                <a href="/"> Users </a>
              </div>
            )}
          <a href="/"> <AiOutlineTeam size={20} /> <p> Collectives </p> </a>
          <a href="/"> <HiOutlineBriefcase size={20} /> <p> Jobs </p> </a>
        </div>
        <div className="leftSidebar-btns">
          <p> Log in </p>
          <p id='signup'> Sign up </p>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
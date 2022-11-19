import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRocketchat
}from "react-icons/fa";
import {FiSettings} from "react-icons/fi"
import {MdOutlineGroups} from "react-icons/md"
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/myprofile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/chats",
            name:"Chat",
            icon:<FaRocketchat/>
        },
         {
            path:"/groupchat",
            name:"GroupChat",
            icon:<MdOutlineGroups/>
        },
      
        {
            path:"/setting",
            name:"Setting",
            icon:<FiSettings/>
        },
    
    ]
    return (
        <div className="Sidebar-main">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">MeetApp</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
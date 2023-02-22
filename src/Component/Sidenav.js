import React, { useState } from 'react'
import {FaBars, FaTachometerAlt} from 'react-icons/fa'
import {AiFillSetting ,AiFillExclamationCircle} from 'react-icons/ai'
import {FiAlertOctagon} from 'react-icons/fi'
import {FcAbout} from 'react-icons/fc'
import { NavLink } from 'react-router-dom'

export const Sidenav = ({children}) => {
    const [isOpen,SetIsOpen]=useState(true)
    const toggle=()=>{
        return SetIsOpen(!isOpen)
    }
    const menuItem=[
        {
            path:'/',
            name:"Dashboard",
            icon:<FaTachometerAlt/>
        },
        {
            path:'/about',
            name:"About",
            icon:<AiFillExclamationCircle/>
        },
        {
            path:'/report',
            name:"Report",
            icon:<FiAlertOctagon />
        },{
            path:'/settings',
            name:"Settings",
            icon:<AiFillSetting/>
        }
    ]
  return (
        <div className='container'>
            <div style={{width:isOpen ? '250px' : '50px'}} className='sidebar'>
                <div className='top_section'>
                    <h1 className='logo' style={{display:isOpen ? 'block':'none'}} >Logo</h1>
                    <div className='bars'>
                    
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((value,index)=>{
                    return(
                        <NavLink to={value.path} key={index} className='link' >
                            <div className='icon'  >{value.icon}</div>
                            <div className='link-text'style={{display:isOpen ? 'block':'none'}} >{value.name}</div>
                        </NavLink>
                    )
                })}
            </div>
            <main>{children}</main>
        </div>
        
  )
}

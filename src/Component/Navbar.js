import React from 'react'
import '../App.css'
import { FaBell } from "react-icons/fa";
import {AiFillSetting} from 'react-icons/ai'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='heading'>
                Heading
            </div>
            <div>
                <input type='text' className='search' placeholder='Search AnyThing' />

            </div>
            <div className='detailes'>
            <FaBell className='icons' />
            <AiFillSetting className='icons' />
            <img src={require('../Assets/men.jpg')} width='40px' height='40px' className='image' />
            </div>
        </nav>
    </div>
  )
}

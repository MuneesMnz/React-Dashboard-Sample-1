import React from 'react'
import '../Component/Dashboard.css'
import { FaShoppingCart,FaWallet,FaCircleNotch,FaUserAlt,FaEllipsisH } from "react-icons/fa";

export default function Dashboard() {

    const dashContainer=[
        {
            value:"2050",
            text:"Total Order",
            icon:<FaShoppingCart  />,
            color:"rgb(184, 71, 71)"
        },
        {
            value:"32500",
            text:"Total Expence",
            icon:<FaWallet/>,
            color:"rgb(71, 184, 118)"
        },
        {
            value:"82.5%",
            text:"Total Revenue",
            icon:<FaCircleNotch  />,
            color:'rgb(71, 160, 184)'
        },
        {
            value:"650",
            text:"New Users",
            icon:<FaUserAlt  />,
            color:'rgb(165, 80, 176)'
        },

    ]
  return (
    <div>
        <h1>Dashboard Page</h1>
        <div className='a'>
        {
            dashContainer.map((value,index)=>{
                return(
                    <div className='container-dash' key={index} style={{backgroundColor:value.color}} >
            <div>
                <p className='number-text'>{value.value}</p>
                <p className='total-text'>{value.text}</p>
            </div>
            <div className='icon-size'>
                {value.icon}
            </div>
        </div>
                )
            })
        }
        </div>

        <div className='graph-container'>
            <div className='graph-line'>
                <div className='line-head'>
                    <p>
                        Product Sales
                    </p>
                    <FaEllipsisH  className='graph-icon' />
                </div>
                <div className='graph-img-1'>
                <img src={require('../Assets/lineSale-removebg.png')} height='350px' />
                </div>
            </div>
            <div className='graph-line'>
                <div className='line-head'>
                    <p>
                        Top Selling Category
                    </p>
                    <FaEllipsisH className='graph-icon' />
                </div>
                <div className='graph-img-2'>
                    <img src={require('../Assets/barsale-removebg.png')} height='350px' />
                </div>
            </div>
        </div>
    </div>
  )
}

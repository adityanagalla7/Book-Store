import React from 'react'
import { useState } from 'react'
import { href, Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { BiSearchAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

import avatarImg from "../assets/avatar.png"
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const navigation=[
  {name: "Dashboard", href:"/dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart Page", href:"/cart"},
  {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const cartItems = useSelector(state => state.cart.cartItems)

  const {currentUser, logout} = useAuth()
  const handleLogOut = () => {
    logout()
  }
  return (
    <header className="max-w-screen-2xl mx-auto px-14 py-10">
      <nav className="flex justify-between items-center">
        
        <div className="flex items-center justify-between gap-4">
            <Link to="/">
              <FaBarsStaggered className="size-6"/>
            </Link> 
        </div>
        <div className="relative flex-1 max-w-xs mx-4">
            <BiSearchAlt className="absolute inline-block left-3 inset-y-2"/>
            <input type="text" placeholder="search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
        </div>
       
        <div className='relative flex items-center md:space-x-3 space-x-2 flex-shrink-0'>
          <div>
            {
              currentUser ? <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="shrink-0">
                  <img src={avatarImg} alt='' className={`w-7 h-7 shrink-0 rounded-full ${currentUser ? 'ring-2 ring-blue-500':''}`} />
                </button>
                {
                  isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul>
                        {
                          navigation.map((item) =>(
                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                              <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                {item.name}
                              </Link>
                            </li>
                          ))
                        }
                        <li>
                          <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                        </li>
                      </ul>
                    </div>
                  )
                }
              </> : <Link to="/login"><FaUser className="size-6" /></Link>
            }
          </div>
            
            <button className="hidden sm:block">
                <IoIosHeart className="size-6" />
            </button>
            <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
            <FaCartShopping className='' />
            {
              cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> :
              <span className='text-sm font-semibold sm:ml-1'>0</span>
              
            }
            
            </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
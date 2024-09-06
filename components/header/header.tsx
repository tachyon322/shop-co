"use client";

import React from 'react'
import Navbar from './navbar'
import SearchBar from './searchBar'
import UserIcons from './userIcons'

function Header() {
  return (
    <div className='flex items-center mt-[24px] mb-[24px] gap-10'>
        <Navbar title='Shop.co' />
        <SearchBar />
        <UserIcons />
    </div>
  )
}

export default Header

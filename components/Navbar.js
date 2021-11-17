import React, { useState } from 'react'
import Link from 'next/link'

import { MenuIcon, BookmarkIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/outline"

import Sidenav from './Sidenav'
import Backdrop from './Backdrop'
import Logo from './Logo'

const Navbar = () => {
    const [isVissible, setIsVissible] = useState(false)
    return (
        <nav className="bg-white shadow-md p-5">
            <Sidenav isVissible={isVissible}/>
            { 
                isVissible && <Backdrop changeIsVissible={() => setIsVissible(false)}/>
            }
            <div className="h-10 cursor-pointer flex justify-between items-center">
                <div className="flex items-center">
                    <button className="mr-3" onClick={() => setIsVissible(true)}>
                        <MenuIcon className="h-10 text-gray-500"/>
                    </button>
                    <Logo />
                </div>
                <ul className="space-x-8 flex">
                    <li className="">
                            <Link href="/cart">
                                <a className="flex space-x-1">
                                    <ShoppingBagIcon className="h-6"/>
                                    <span className="hidden md:block">Cart</span>
                                </a>
                            </Link>
                    </li>
                    <li className="">
                            <Link href="/cart">
                                <a className="flex space-x-1">
                                    <BookmarkIcon className="h-6"/>
                                    <span className="hidden md:block">Wishlist</span>
                                </a>
                            </Link>
                    </li>
                    <li className="hidden md:block">
                            <Link href="/login">
                                <a className="flex space-x-1">
                                    <UserIcon className="h-6"/>
                                    <span>Login</span>
                                </a>
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

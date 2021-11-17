import React from 'react'

import Logo from './Logo'

const Sidenav = ({ isVissible }) => {
    return (
        <nav className={`w-72 bg-gray-100 min-h-screen space-y-10 py-6 pl-4 shadow-md
            fixed inset-y-0 left-0 transform ${isVissible ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out z-50`}>
            <Logo />
        </nav>
    )
}

export default Sidenav

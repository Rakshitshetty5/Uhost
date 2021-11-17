import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
const Layout = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title} - Ecommerce</title>
                <meta name="description" content="Ecommerce Website"/>
            </Head>
            <header className="sticky top-0 z-50 ">
                <Navbar />
            </header>
            <div className="flex flex-col min-h-[90vh]">
                <main className="flex-1 p-5">
                    { children }
                </main>
                <footer>
                    I am footer
                </footer>
            </div>
        </>
    )
}

export default Layout

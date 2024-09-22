"use client"

import Brand from '../Brand'

const Navbar = () => {
    return (
        <header className='bg-white w-full md:text-sm fixed top-8 z-10 left-10'>
            <nav className={"bg-white w-full md:text-sm fixed top-8 z-10"}>
                        <Brand />
            </nav>
        </header>
    )
}

export default Navbar
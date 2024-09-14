import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Menu for Mobile */}
            <div className="fixed z-30 top-4 right-4 bg-[#3D4451] rounded-lg md:hidden shadow-md">
                <button
                    aria-label={isOpen ? "Close menu" : "Show menu"}
                    className="p-2 focus:outline-none"
                    onClick={toggleDrawer}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Drawer Menu */}
            <div className={`fixed inset-y-0 right-0 z-20 w-80 bg-base-100 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-6 pt-20">
                    <button onClick={toggleDrawer} className="absolute top-4 right-4 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col space-y-4">
                        <li><a href="#section-projects" className="btn w-full bg-[#3D4451] text-white" onClick={toggleDrawer}>Projects</a></li>
                        <li><a href="#section-experience" className="btn w-full bg-[#3D4451] text-white" onClick={toggleDrawer}>Experience<span className="hidden sm:inline sm:ml-2">Posts</span></a></li>
                        <li><a href="#section-contact" className="btn w-full bg-[#3D4451] text-white" onClick={toggleDrawer}>Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-10 bg-black opacity-50" onClick={toggleDrawer}></div>
            )}

            {/* Desktop Navbar */}
            <div className="pt-2 fixed mx-auto w-full z-10 backdrop-blur-sm opacity-[0.8] bg-[#f9fafb] navbar hidden md:block">
                <nav className="flex justify-around items-center">
                    <div className="logo">
                        <a href="#hero">
                            <img src="logo.avif" alt="YM" className="w-10 h-10 cursor-pointer rounded-full" />
                        </a>
                    </div>
                    <div className="nav flex gap-12">
                        <div className="projects cursor-pointer ">
                            <a role="button" href='#section-projects' className="btn btn-ghost ">PROJECTS</a>
                        </div>
                        <div className="experience cursor-pointer">
                            <a role="button" href='#section-experience' className="btn btn-ghost">EXPERIENCE</a>
                        </div>
                        <div className="contact cursor-pointer">
                            <a role="button" href='#section-contact' className="btn btn-ghost">CONTACT</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
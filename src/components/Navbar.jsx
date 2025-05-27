import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/hotels' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about'},
    ];

    const location = useLocation();
    const [isScrolled, setIsScrolled] = React.useState(location.pathname !== '/');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const {openSignIn} = useClerk()
    const {user} = useUser()

    React.useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                setIsScrolled(window.scrollY > 10);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 z-50 ${
            isScrolled 
                ? "bg-gray-900 shadow-lg text-white py-3 md:py-4" 
                : "bg-gray-900 py-4 md:py-6"
        }`}>
            {/* Logo */}
            <Link to={"/"} className="flex items-center gap-2 group">
                <h1 className="font-extrabold text-3xl text-white transition-colors duration-300">
                    Stayo
                </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        to={link.path} 
                        className="group relative font-medium text-white hover:text-gray-300"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
                <button className="border border-white px-5 py-1.5 text-sm font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300">
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-6">
                <button className="p-2 rounded-full hover:bg-white/10 transition-all duration-300">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
                {user ? (
                    <UserButton afterSignOutUrl="/" />
                ) : (
                    <button 
                        onClick={openSignIn} 
                        className="px-6 py-2.5 rounded-full font-medium bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300"
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-base flex flex-col md:hidden items-center justify-center gap-8 font-medium text-white transition-all duration-500 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
                <button 
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-all duration-300" 
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
                    >
                        {link.name}
                    </Link>
                ))}

                <button className="border border-white px-6 py-2 text-sm font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300">
                    Dashboard
                </button>

                {user ? (
                    <UserButton afterSignOutUrl="/" />
                ) : (
                    <button 
                        onClick={openSignIn} 
                        className="bg-white text-gray-900 px-8 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
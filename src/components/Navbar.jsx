import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                {/* Changed to standard anchor link to go home first if clicked from subpages */}
                <a className='logo' href="/#hero"> Amlan | AJ</a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className='group'>
                                {/* Added root prefix slash so section hashes jump back correctly from sub-routes */}
                                <a href={`/${link}`} className='nav-link'>
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                        {/* New link sharing the exact layout structure and custom underline effects */}
                        <li className='group'>
                            <Link to="/profile" className='nav-link'>
                                <span>Coding Profile</span>
                                <span className='underline' />
                            </Link>
                        </li>
                    </ul>
                </nav>

                <a href="/#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default Navbar;
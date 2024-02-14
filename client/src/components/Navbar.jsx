import React, { useState, useEffect } from 'react';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[data-scrollspy]');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setCurrentSection(section.getAttribute('id'));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (section) => {
        setCurrentSection(section);
        setNav(false); // Close the mobile menu after clicking a menu item
    };

    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem', backgroundColor: '#101114', color: '#E2F0FF' }}>
            <div style={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'cursive', color: '#5fdf3f', fontStyle: 'italic', userSelect: 'none' }}>AH</div>

            <div className='hidden md:flex'>
                <Scrollspy items={['home', 'about', 'skills', 'projects']} currentClassName='text-green-500' offset={-50} style={{ display: 'flex', userSelect: 'none' }}>
                    <li className={currentSection === 'home' ? 'text-green-500' : 'hover:text-[#adadad]'}><Link to='home' smooth={true} duration={500} onClick={() => handleClick('home')}>HOME</Link></li>
                    <li className={currentSection === 'about' ? 'text-green-500' : 'hover:text-[#adadad]'}><Link to='about' smooth={true} duration={500} onClick={() => handleClick('about')}>ABOUT</Link></li>
                    <li className={currentSection === 'skills' ? 'text-green-500' : 'hover:text-[#adadad]'}><Link to='skills' smooth={true} duration={500} onClick={() => handleClick('skills')}>SKILLS</Link></li>
                    <li className={currentSection === 'projects' ? 'text-green-500' : 'hover:text-[#adadad]'}><Link to='projects' smooth={true} duration={500} onClick={() => handleClick('projects')}>MY PROJECTS</Link></li>
                </Scrollspy>
            </div>

            <div onClick={toggleNav} className='md:hidden z-10' style={{ cursor: 'pointer' }}>
                {!nav ? <FaBars style={{ fontSize: '24px', transition: 'transform 0.15s ease' }} /> : <FaBars style={{ fontSize: '24px', transform: 'rotate(90deg)', transition: 'transform 0.15s ease' }} />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#101114] flex flex-col justify-center items-center'} style={{ userSelect: 'none' }}>
                <li className='py-6 text-4xl text-[#E2F0FF] hover:text-[#adadad]' onClick={() => handleClick('home')}><Link to='home' smooth={true} duration={500} onClick={() => handleClick('home')}>HOME</Link></li>
                <li className='py-6 text-4xl text-[#E2F0FF] hover:text-[#adadad]' onClick={() => handleClick('about')}><Link to='about' smooth={true} duration={500} onClick={() => handleClick('about')}>ABOUT</Link></li>
                <li className='py-6 text-4xl text-[#E2F0FF] hover:text-[#adadad]' onClick={() => handleClick('skills')}><Link to='skills' smooth={true} duration={500} onClick={() => handleClick('skills')}>SKILLS</Link></li>
                <li className='py-6 text-4xl text-[#E2F0FF]  ' onClick={() => handleClick('projects')}><Link to='projects' smooth={true} duration={500} onClick={() => handleClick('projects')}>MY PROJECTS</Link></li>
                <ul className='flex'>

                    <li className='hover:text-[#adadad]'>
                        <a href="https://www.linkedin.com/in/alexander-holden-9b4a00215/">
                            <FaLinkedin size={20} />
                        </a>
                    </li>

                    <li className='hover:text-[#adadad]'>
                        <a href="/">
                            <HiOutlineMail size={20} />
                        </a>
                    </li>

                    <li className='hover:text-[#adadad]'>
                        <a href="/">
                            <FaGithub size={20} />
                        </a>
                    </li>
                </ul>
                
            </ul>

            <div className='hidden lg:flex fixed flux-col top-[35%] left-0'>
                <ul>
                    <li className='w-[130px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] hover:pl-6 duration-100'>
                        <a className=' flex justify-between items-center w-full text-grey-300 ' href="https://www.linkedin.com/in/alexander-holden-9b4a00215/">
                            Linkedin <FaLinkedin size={30} className='text-[#E2F0FF]' />
                        </a>
                    </li>

                    <li className='w-[130px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] hover:pl-6 duration-100'>
                        <a className='flex justify-between items-center w-full text-grey-300' href="/">
                            GitHub <FaGithub size={30} className='text-[#E2F0FF]' />
                        </a>
                    </li>

                    <li className='w-[130px] h-[60px] flex justify-between items-center ml-[-70px] hover:ml-[-10px] hover:pl-6 duration-100 '>
                        <a className='flex justify-between items-center w-full text-grey-300' href="/">
                            Email <HiOutlineMail size={30} className='text-[#E2F0FF]' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

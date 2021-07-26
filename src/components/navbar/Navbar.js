import React, { useState, useEffect } from 'react'
import { Nav, NavMenu, NavItem, NavLinks } from './NavbarComponents'


const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <Nav scrollNav={scrollNav}>
            <NavMenu>
                <NavItem>
                    <NavLinks to="question-no-1"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={0} 
                    >Question No. 1</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="question-no-2"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={0} 
                    >Question No. 2</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="question-no-3"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={0} 
                    >Question No. 3</NavLinks>
                </NavItem>
            </NavMenu>
        </Nav>
    )
}

export default Navbar

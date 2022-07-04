import React from "react"
import Link from 'next/link'
import Image from "next/image"
import Logo from '../../public/static/img/logo-white.png'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <header className="header-area">
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ul className="top-list">
                                    <li>
                                        <i className="flaticon-clock"></i>
                                        Mon-Sun 8:00 to 20:00
                                    </li>
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <Link href="tel:+919560933344">Call Us: 9560933344</Link>
                                    </li>
                                    <li>
                                        <i className="flaticon-paper-plane"></i>
                                        <Link href="mailto:contact@ezscan.ai">contact@ezheal.ai</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <ul className="top-social">
                                    <li>
                                        <Link href="https://www.facebook.com/EZscan-105588505185824">
                                            <a className="facebook"><i className="fab fa-facebook-f"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/Aikenist1" >
                                            <a className="twitter"><i className="fab fa-twitter"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/channel/UCrOAQPYxgg9ZM8wCc83pfUA">
                                            <a className="pinterest"><i className="fab fa-youtube"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/aikenist/">
                                            <a className="instagram"> <i className="fab fa-linkedin-in"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="signIn">
                                            <a className="log-in" style={{ color: 'white' }}>Sign In</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/signUp">
                                            <a className="sign-in">Sign Up</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-navbar">
                    <Navbar color="light" light expand="md" className="navbar">
                        <NavbarBrand href="/"><Link href="/">
                            <Image src={Logo} className="white-logo" alt="image" width={200} height={80} />
                        </Link></NavbarBrand>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link href="/">
                                        <a className="nav-link"> Home </a>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/about">
                                        <a className="nav-link">About</a>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/services">
                                        <a className="nav-link"> Services </a>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/contact">
                                        <a className="nav-link">Contact</a>
                                    </Link>
                                </NavItem>


                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Dashboard
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link href="/">
                                                <a className="nav-link">Docter Panel</a>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link href="/">
                                                <a className="nav-link">Diognoistic Panel</a>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem/>
                                        <DropdownItem>
                                            <Link href="/">
                                                <a className="nav-link">Pharma Panel</a>
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <div className="others-options">
                                <Link href="/signIn">
                                    <a className="default-btn-two st">Clinician Appointment <span></span></a>
                                </Link>
                                <Link href="/signIn">
                                    <a className="default-btn-two st ms-1">Diagnostic Booking <span></span></a>
                                </Link>
                            </div>
                        </Collapse>
                    </Navbar>
                </div>




            </header >
        </>
    )
}

export default Header
import { React, useState, useEffect, useContext } from "react"
import Link from 'next/link'
import Image from "next/image"
import Logo from '../../public/static/img/logo-white.png'
import { useSelector } from "react-redux"
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
import { baseUrl, baseUrlImage } from '~/lib/api'
import userContext from "~/context/userContext";
import Cookies from "js-cookie";
import Router from "next/router";
//   stickyElem = document.querySelector(".sticky-div");

//     /* Gets the amount of height
//     of the element from the
//     viewport and adds the
//     pageYOffset to get the height
//     relative to the page */
//     currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
//     window.onscroll = function() {

//         /* Check if the current Y offset
//         is greater than the position of
//         the element */
//         if(window.pageYOffset > currStickyPos) {
//             stickyElem.style.position = "fixed";
//             stickyElem.style.top = "0px";
//         } else {
//             stickyElem.style.position = "relative";
//             stickyElem.style.top = "initial";
//         }
//     }

const Header = () => {

    const user = useContext(userContext);

    const [titles, setTitles] = useState()

    const {cartItem} = useSelector(state => state.custome)

    const fetchPromotionBanners = async () => {
        const param = `headers`
        const response = await fetch(`${baseUrl}/${param}`)
        const data = await response.json()
        const response1 = data
        setTitles(response1.data)
        // console.log(response1.data)
    }

    useEffect(() => {
         // checks if the user is authenticated
        //  authContext.isUserAuthenticated()
        //  ? router.push("/")
        //  : router.push("/dashboard");
        fetchPromotionBanners()
    }, [])


    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        Router.push('/')
        Cookies.remove('jwt'); 
    }

    return (
        <>
            {
                ((titles || []).map((data, index) => {
                    return (
                        <header key={data.id} className="header-area">
                            <div className="top-header">
                                <div className="container">
                                    <div className="row align-items-center">

                                        <div key={data.id} className="col-lg-6">

                                            <ul className="top-list">
                                                <li>
                                                    <i className="flaticon-clock"></i>
                                                    {data.attributes.timing}
                                                </li>
                                                <li>
                                                    <i className="flaticon-phone-call"></i>
                                                    <a href="#">{data.attributes.phone}</a>
                                                </li>
                                                <li>
                                                    <i className="flaticon-paper-plane"></i>
                                                    <a href="#">{data.attributes.email}</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="top-social">
                                                <li>
                                                    <Link href={data.attributes.facebook}>
                                                        <a className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={data.attributes.Twitter} >
                                                        <a className="twitter"><i className="fab fa-twitter"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={data.attributes.youtube}>
                                                        <a className="pinterest"><i className="fab fa-youtube"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={data.attributes.linkedin}>
                                                        <a className="instagram"> <i className="fab fa-linkedin-in"></i></a>
                                                    </Link>
                                                </li>   
                                                {user ? 

                                                (<>
                                                
                                                <li><div className="user-dropdown">
                                                    <UncontrolledDropdown nav inNavbar>
                                                    <DropdownToggle nav caret className="text-white">
                                                    <i className="fa-regular fa-user text-white" style={{background:'none', fontSize:'1.3rem'}}></i>
                                                    </DropdownToggle>
                                                    <DropdownMenu right style={{zIndex:'1021'}}>
                                                        <DropdownItem>
                                                            <Link href="/dashboard">
                                                                <a className="p-0">Dashboard</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <Link href="/account-setting">
                                                                <a className="p-0">Account Setting</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <Link href="/account-setting">
                                                                <a className="p-0">Orders</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <Link href="/account-setting">
                                                                <a className="p-0">Lab Tests</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <Link href="/account-setting">
                                                                <a className="p-0">Consultations</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <Link href="/account-setting">
                                                                <a className="p-0">Health Records</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <span onClick={()=> handleLogout()}>Logout</span>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                    </div></li>
                                                    </>) : 
                                                (
                                                    <li>
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
                                                 </li> 
                                                )}    

                                                <li><Link href='/cart'><a><span className="bg-dark text-white" style={{position:'relative', top:'-10px' ,right:'-31px', zIndex:'2', borderRadius:'50%',padding:'0px 5px'}}>{cartItem ? cartItem.length : 0}</span><i className="fa-solid fa-cart-shopping text-white" style={{background:'none', fontSize:'1.3rem',position:'absolute'}}></i></a></Link></li>                         

                                        </ul>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sticky-top">


                                <div className="main-navbar">
                                    <Navbar color="light" light expand="md" className="navbar">
                                        <Link href="/" className="p-0">
                                            <Image src={Logo} className="white-logo" alt="image" width={200} height={80} />
                                        </Link>
                                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                                        <Collapse isOpen={isOpen} navbar>
                                            <Nav className="mr-auto" navbar>
                                                
                                                <NavItem>
                                                    <Link href="/about">
                                                        <a className="nav-link">Doctar Consultaion</a>
                                                    </Link>
                                                </NavItem>
                                                
                                                        <NavItem>
                                                        <Link href="/diognostic-center">
                                                            <a className="nav-link">Diagnostic Center</a>
                                                        </Link>
                                                        </NavItem>  
                                                    
                                                        <NavItem>
                                                    <Link href="/pharmacy">
                                                        <a className="nav-link"> Pharmacy </a>
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
                                                            <Link href="/doctorlogin">
                                                                <a className="nav-link p-0">Docter Panel</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <Link href="/diologin">
                                                                <a className="nav-link p-0">Diagnoistic Panel</a>
                                                            </Link>
                                                        </DropdownItem>
                                                        <DropdownItem>
                                                            <Link href="/pharmalogin">
                                                                <a className="nav-link p-0">Pharma Panel</a>
                                                            </Link>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </Nav>
                                            <div className="others-options">
                                                <Link href="/clnbooking">
                                                    <a className="default-btn-two st">Clinician Appointment <span></span></a>
                                                </Link>
                                                <Link href="/diabooking">
                                                    <a className="default-btn-two st ms-1">Diagnostic Booking <span></span></a>
                                                </Link>
                                            </div>
                                        </Collapse>
                                    </Navbar>
                                </div>
                            </div>



                        </header>
                    )
                }))}
        </>
    )
}

export default Header
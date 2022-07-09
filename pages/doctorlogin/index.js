import React from 'react';
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

import Footer_copyright from '~/components/ReusableComponent/Footer_copyright';

const index = () => {
    return (
        <>
        <div className="main-navbar">
        <Navbar color="light" light expand="md" className="navbar">
        <Link href="/" className="p-0">
                            <Image src={Logo} className="white-logo" alt="image" width={200} height={80} />
                        </Link>
        </Navbar>
        </div>
        <div>

            <h2 style={{color: "#224e77",textAlign:"center"}}> Doctor Login </h2>
        </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card w-100 p-5" style={{marginTop:'70px'}}>
                    <div className="row">
                    
                        <div className="col-md-6">
                            <div className="form">

                                <h2>Login</h2>
                                <form className="login-form" method="post" action="">

                                    <div className="inputbox mt-3">
                                        <span>Email</span>
                                        <input type="text" id="login-username" autofocus="" className="form-control" name="email" placeholder="email" value="" required="" style={{ height: '50px', backgroundColor: '#eee !important', outline: '#f50057' }} />
                                        <div className="inputbox mt-3">
                                            <span>Password</span>
                                            <input type="password" name="password" autofocus="" className="form-control" placeholder="Password" value="" required="" style={{ height: '50px', backgroundColor: '#eee !important', outline: '#f50057' }}/>


                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-right">
                                                <button type="submit" name="login" value="Login" className="btn register btn-block mt-3" style={{backgroundColor:'#f50057',borderColor:'#f50057', color:'white',height:'51px' ,width:'200px'}}>Login
                                                </button>


                                            </div>
                                            <a href="/docregister" className="login" style={{color:'#f50057'}}>Register</a>
                                        </div>

                                        <div className="form-check mt-2"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" /> <label className="form-check-label" for="flexCheckChecked"> I agree to the terms and conditions of <a href="/privacypolicy" className="login" style={{color:'#f50057'}}>Privacy &amp; Policy</a> </label> </div>
                                    </div></form>
                            </div>


                        </div>
                        <div className="col-md-6">
                            <div className="text-center mt-5"> <img src="https://i.imgur.com/98GXnDD.png" width="400" /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer_copyright/>
        </>
    )
}

export default index
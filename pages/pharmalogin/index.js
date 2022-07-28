import React from 'react';
import Link from 'next/link'

import Footer_copyright from '~/components/ReusableComponent/Footer_copyright';
import { DashbordPanelHeader } from '~/components/ReusableComponent/DashbordPanelHeader';

const Index = () => {
    return (
    <>
        <div className="main-navbar">
       <DashbordPanelHeader/>
        </div>
        <div>

            <h2 className='mt-5' style={{color: "#224e77",textAlign:"center"}}> Pharma Login </h2>
        </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card w-100 my-5 p-5">
                    <div className="row">
                    
                        <div className="col-md-6">
                            <div className="form">

                                <h2>Login</h2>
                                <form className="login-form" method="post" action="">

                                    <div className="inputbox mt-3">
                                        <span>Email</span>
                                         <input type="text" id="login-username" autoFocus="" className="form-control" name="email" placeholder="email" value="" required="" />
                                        <div className="inputbox mt-3">
                                            <span>Password</span>
                                            <input type="password" name="password" autoFocus="" className="form-control" placeholder="Password" value="" required=""/>


                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-right">
                                                <button type="submit" name="login" value="Login" className="btn register btn-block mt-3" style={{backgroundColor:'#224e77',borderColor:'#224e77', color:'white',height:'51px' ,width:'200px'}}>Login
                                                </button>


                                            </div>
                                           <Link href="/pharmaregister"> 
                                             <a className="login" style={{color:'#224e77'}}>Register</a>
                                           </Link>
                                        </div>

                                        <div className="form-check mt-2 ps-0"> <input type="checkbox" value="" id="flexCheckChecked"/> <label className="form-check-label" htmlFor="flexCheckChecked"> I agree to the terms and conditions of <Link href="/privacypolicy"><a className="login" style={{color:'#224e77'}}>Privacy &amp; Policy</a></Link></label> </div>
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

export default Index
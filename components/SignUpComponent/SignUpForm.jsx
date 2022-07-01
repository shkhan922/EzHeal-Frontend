import React from 'react';
import Link from 'next/link';

const SignUpForm = () => {
    return (
        <>
            <div className="signup-area ptb-100">
                <div className="container">
                    <div className="signup-form">
                        <h3>Create your Account</h3>
                        <form className="login-form" enctype="multipart/form-data" method="post" action="">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" name="name" value="" required="" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="email" value="" required="" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Password" name="password" value="" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="mobile_no" placeholder="mobile number" value="" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="city" placeholder="city" value="" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="address" name="address" value="" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="age" name="age" value="" required="" />
                                    </div>
                                </div>




                                <div className="col-lg-12">
                                    <div className="send-btn">
                                        <button type="submit" name="submit" className="default-btn">                                        Sign Up Now
                                        </button>
                                    </div>
                                    <br />
                                    <span>Already a registered user? <Link href="/signIn">Login!</Link></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpForm
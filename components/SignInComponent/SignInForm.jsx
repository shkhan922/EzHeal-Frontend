import React from 'react';
import Link from 'next/link';

const SignInForm = () => {
    return (
        <>
            <div className="sign-in-area ptb-100">
                <div className="container">
                    <div className="sign-in-form">
                        <div className="sign-in-title">
                            <h3>Welcome Back!</h3>
                            <p>Please Sign In to your account.</p>
                        </div>
                        <form className="login-form" method="post" action="">
                            <div className="row">
                                <div className="col-lg-12">

                                    <div className="form-group">
                                        <label>Username or Email</label>
                                        <input type="text" id="login-username" autoFocus="" className="form-control" name="email" placeholder="email" value="" required="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" autoFocus="" className="form-control" placeholder="Password" value="" required="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                    <label className="form-check-label" htmlFor="checkme">Keep me Log In</label>
                                </div>
                            </div>

                            <div className="col-lg-12 text-end">
                                <p className="forgot-password"><a href="https://ezheal.ai/ForgetPwd">Forgot Password?</a></p>
                            </div>

                            <div className="col-lg-12">
                                <div className="send-btn">

                                    <button type="submit" name="login" value="Login" className="default-btn">                                        Log In Now
                                    </button>
                                    <br />
                                    <span>Don't have account? <Link href="/signUp">Signup!</Link></span>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInForm
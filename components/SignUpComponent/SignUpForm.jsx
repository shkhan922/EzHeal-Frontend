import React, { useState } from 'react';
import Link from 'next/link';
import { FormFeedback, Input, Label, Spinner, Alert } from 'reactstrap';
import axios from 'axios';
import { useRouter } from 'next/router';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

const SignUpForm = () => {
    const [confirmPassword, setConfirmPassword] = useState();
    const [initialCpassword, setInitialCpassword] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const router = useRouter()
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            username: '',
            email: '',
            password: '',
            mobile: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your username"),
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password").matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
            mobile: Yup.number().required("Please Enter Your Mobile No.")
        }),
        onSubmit: (initialValues) => {
            setSignUpLoading(true)
            axios.post('https://ezheal.in/api/auth/local/register', {
                username: initialValues.username,
                email: initialValues.email,
                password: initialValues.password,
                mobile: initialValues.mobile.toString(),
            }).then(result => {
                console.log(result);
                setSignUpLoading(false);
                
                router.push({
                    pathname: '/signIn',
                    query: { returnUrl: router.asPath }
                })
            }).catch(err => {
                console.log(err);
                setSignUpLoading(false);
        
            });

        }
    });
    return (
        <>
            <div className="signup-area ptb-100">
                <div className="container">
                    <div className="signup-form">
                        <h3>Create your Account</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }} action="#">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">

                                        <Label htmlFor="username" className="form-label"><span className='d-flex gap-1'><span>Username </span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            name="username"
                                            id='username'
                                            className="form-control"
                                            placeholder="Enter Username"
                                            type="text"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.username || ""}
                                            invalid={
                                                validation.touched.username && validation.errors.username ? true : false
                                            }
                                        />
                                        {validation.touched.username && validation.errors.username ? (
                                            <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <Label htmlFor="email" className="form-label"><span className='d-flex gap-1'><span>Email</span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter email address"
                                            type="email"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.email || ""}
                                            invalid={
                                                validation.touched.email && validation.errors.email ? true : false
                                            }
                                        />
                                        {validation.touched.email && validation.errors.email ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <Label htmlFor="mobile" className="form-label"><span className='d-flex gap-1'><span>Mobile Number</span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            id="mobile"
                                            name="mobile"
                                            className="form-control"
                                            placeholder="Enter Mobile Number"
                                            type="number"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.mobile || ""}
                                            invalid={
                                                validation.touched.mobile && validation.errors.mobile ? true : false
                                            }
                                        />
                                        {validation.touched.mobile && validation.errors.mobile ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.mobile}</div></FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <Label htmlFor="password" className="form-label"><span className='d-flex gap-1'><span>Password</span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            type="password"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.password || ""}
                                            invalid={
                                                validation.touched.password && validation.errors.password ? true : false
                                            }
                                        />
                                        {validation.touched.password && validation.errors.password ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.password}</div></FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <Label htmlFor="confirmPassword" className="form-label"><span className='d-flex gap-1'><span>Confirm Password</span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            name="password"
                                            type="password"
                                            placeholder="Confirm Password"
                                            onChange={(e) => { setConfirmPassword(e.target.value); setInitialCpassword(true) }}
                                        />
                                        {initialCpassword && ((validation.values.password !== confirmPassword) ? <small className="text-danger">Password does match</small> : '')}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="send-btn">
                                        {
                                            (validation.values.password !== confirmPassword)
                                                ? <button type="submit" name="submit" className="default-btn" disabled>Sign Up Now</button>
                                                : <button type="submit" name="submit" className="default-btn">
                                                    {signUpLoading ? <> <Spinner size='sm' /> Loading...</> : 'Sign Up Now'}</button>
                                        }
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
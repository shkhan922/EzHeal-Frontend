import React, { useState } from 'react';
import Link from 'next/link';
import { FormFeedback, Input, Label } from 'reactstrap';
import axios from 'axios';
import Cookies from 'js-cookie';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

const SignUpForm = () => {
    const [confirmPassword, setConfirmPassword] = useState();
    const [initialCpassword, setInitialCpassword] = useState(false)
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            username: '',
            email: '',
            password: '',
            mobile: '',
            city: '',
            address: '',
            age: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your username"),
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
            mobile: Yup.string().required("Please Enter Your Mobile No."),
            city: Yup.string().required("Please Enter Your City"),
            address: Yup.string().required("Please Enter Your Address"),
            age: Yup.string().required("Please Enter Your Age"),
        }),
        onSubmit: async (values) => {
            dispatch(loginUser(values, props.history));
            setSignInLoading(true)
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
                                        {initialCpassword && ((validation.values.password !== confirmPassword) ? <small className="text-danger">*Password does match*</small> : '')}
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
                                            type="tel"
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
                                        <Label htmlFor="city" className="form-label"><span className='d-flex gap-1'><span>City</span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            id="city"
                                            name="city"
                                            className="form-control"
                                            placeholder="Enter City"
                                            type="text"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.city || ""}
                                            invalid={
                                                validation.touched.city && validation.errors.city ? true : false
                                            }
                                        />
                                        {validation.touched.city && validation.errors.city ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.city}</div></FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <Label htmlFor="address" className="form-label"><span className='d-flex gap-1'><span>Address</span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            id="address"
                                            name="address"
                                            className="form-control"
                                            placeholder="Enter Address"
                                            type="text"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.address || ""}
                                            invalid={
                                                validation.touched.address && validation.errors.address ? true : false
                                            }
                                        />
                                        {validation.touched.address && validation.errors.address ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.address}</div></FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <Label htmlFor="age" className="form-label"><span className='d-flex gap-1'><span>Age</span><span className="text-danger">*</span></span></Label>
                                        <Input
                                            id="age"
                                            name="age"
                                            className="form-control"
                                            placeholder="Enter Age"
                                            type="text"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.age || ""}
                                            invalid={
                                                validation.touched.age && validation.errors.age ? true : false
                                            }
                                        />
                                        {validation.touched.age && validation.errors.age ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.age}</div></FormFeedback>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="send-btn">
                                        <button type="submit" name="submit" className="default-btn">Sign Up Now</button>
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
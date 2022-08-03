import React,{useState} from 'react';
import Link from 'next/link';
import { FormFeedback, Input, Label,Spinner,Alert } from 'reactstrap';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

const SignInForm = () => {

    const router = useRouter();

    const [signUpLoading, setSignUpLoading] = useState(false);
    const [loginStatus, setloginStatus] = useState();
    const [alert, serAlert] = useState(false)

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: Yup.object({
            identifier: Yup.string().required("Please Enter Your username/email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (initialValues) => {
            setSignUpLoading(true)
            serAlert(true)
            axios.post('https://ezheal.in/api/auth/local', {
                identifier: initialValues.identifier,
                password: initialValues.password,
            }).then(response => {
                console.log(response); 
                setSignUpLoading(false);
                Cookies.set('jwt',response.jwt);
                setloginStatus(true)
                router.push({
                    pathname: '/',
                    query: { returnUrl: router.asPath }
                })
            }).catch(err => {
                setloginStatus(false)
                 console.log(err);
                 setSignUpLoading(false);
            });
        }
    });

    return (
        <>{
            alert && (
                loginStatus ? <Alert color='success' className='m-2'>Login <strong>Success</strong> </Alert> 
                : <Alert color='danger' className='m-2'> <strong>Invalid Credential!</strong></Alert>
            )          
          }
            <div className="sign-in-area ptb-100">
                <div className="container">
                    <div className="sign-in-form">
                        <div className="sign-in-title">
                            <h3>Welcome Back!</h3>
                            <p>Please Sign In to your account.</p>
                        </div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }} action="#">
                        <div className="col-lg-12">
                                    <div className="form-group">

                                        <Label htmlFor="identifier" className="form-label">Email/Username</Label>
                                        <Input
                                            name="identifier"
                                            id='identifier'
                                            className="form-control"
                                            placeholder="Enter Email/Username"
                                            type="text"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.identifier || ""}
                                            invalid={
                                                validation.touched.identifier && validation.errors.identifier ? true : false
                                            }
                                        />
                                        {validation.touched.identifier && validation.errors.identifier ? (
                                            <FormFeedback type="invalid">{validation.errors.identifier}</FormFeedback>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">

                                        <Label htmlFor="password" className="form-label">Password</Label>
                                        <Input
                                            name="password"
                                            id='password'
                                            className="form-control"
                                            placeholder="Enter Password"
                                            type="password"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.password || ""}
                                            invalid={
                                                validation.touched.password && validation.errors.password ? true : false
                                            }
                                        />
                                        {validation.touched.password && validation.errors.password ? (
                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                        ) : null}
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

                                    <button type="submit" name="login" value="Login" className="default-btn"> 
                                        {signUpLoading ?<> <Spinner size='sm'/> Loading...</>: 'Sign In Now'}
                                    </button>
                                    <br />
                                    <span>Don't have an account? <Link href='/signUp'>Signup!</Link></span>
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
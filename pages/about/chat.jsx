import React from 'react';
import Header from '~/components/ReusableComponent/Header';
import Footer from '~/components/ReusableComponent/Footer';

const Chat = () => {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className='row'>

                    <div className="col-md-3 p-0">
                        <div className='border-bottom' style={{ padding: "11px 15px " }}>
                            Steps to consult with doctor
                        </div>
                        <div className='py-3'>
                            <div className='text-center mb-3'>
                                <div className='text-center'><img src="https://cdn.pixabay.com/photo/2017/12/27/12/41/picture-frame-3042585_1280.jpg" alt="" className='w-25' /></div>
                                <span>Step 1</span><br />
                                <small>Tell us about your problem</small>
                            </div>
                            <div className='text-center mb-3'>
                                <div className='text-center mb-2'><img src="https://cdn.pixabay.com/photo/2017/01/31/22/32/doctor-2027768_1280.png" alt="" className='w-25' /></div>
                                <span>Step 2</span><br />
                                <small>Chat/Call with our Doctor</small>
                            </div>
                            <div className='text-center'>
                                <div className='text-center'><img src="https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_1280.png" alt="" className='w-25' /></div>
                                <span>Step 3</span><br />
                                <small>Get medicines at your doorstep</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 border p-0">
                        <div className='h-100 d-flex flex-column justify-content-between'>
                            <div>
                            <div className='d-flex justify-content-between align-items-center px-3 py-2 border-bottom'>
                                <div>
                                    <span className='me-3'>
                                        <img src="https://pbs.twimg.com/profile_images/1483493069752258566/Ft0W9FvR_400x400.jpg" className='rounded-circle' width={30} alt="" />
                                    </span>
                                    <span>Health Assistant</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='px-2 py-3'>
                                <div>
                                    <div className='d-flex mb-3'>
                                        <img src="https://pbs.twimg.com/profile_images/1483493069752258566/Ft0W9FvR_400x400.jpg" className='rounded-circle me-3' width={50} alt="" />
                                        <div>
                                            <h5 className='fw-normal mb-0'>Health Assistant</h5>
                                            <small className='fst-italic'>I will help you with all your medical needs</small>
                                        </div>
                                    </div>
                                    <div className='bg-light px-4 mx-3 py-1' style={{ borderRadius: "17px" }}>
                                        <small>Your Chat consultation details will remain strictly confidential.
                                            Please answer a few questions about the patient for quick and accurate diagnosis by our expert doctors.</small>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            <div className='bg-light d-flex gap-2 p-3'>
                                <input type="text" className='form-control' placeholder='enter name here..' />
                                <button className='btn btn-success'>send</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className='d-flex justify-content-between mb-4'>
                            <span>My consultaion</span>
                            <span><i className="fa-solid fa-bars cursor-pointer"></i></span>
                        </div>
                        <div className='px-3'>
                            <button className='btn default-btn-two rounded w-100 m-0'>
                                Start a New Consultation
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
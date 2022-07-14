import React from 'react';
import { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Footer_copyright from '~/components/ReusableComponent/Footer_copyright';
import { DashbordPanelHeader } from '~/components/ReusableComponent/DashbordPanelHeader';

const index = () => {
    
    const [doctorType, setDoctorType] = useState('select')
    const [category, setCategory] = useState('select')
    return (
        <>
            <div className="main-navbar">
                <DashbordPanelHeader />
            </div>
            <div>
                <h2 className='mt-5' style={{ color: "#224e77", textAlign: "center" }}> Doctor Register </h2>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card w-100 my-5 p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form">
                                <h2>Register</h2>
                                <form class="signup-form" enctype="multipart/form-data" method="post" action="">
                                    <div class="inputbox mt-3">
                                        <span>Doctor Type</span>
                                        <UncontrolledDropdown className='w-100'>
                                            <DropdownToggle>
                                              {doctorType}  <input value={doctorType} className='d-none'/>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={()=>setDoctorType('doctor')}>doctor</DropdownItem>
                                                <DropdownItem onClick={()=>setDoctorType('dietician')}>dietician</DropdownItem>
                                                <DropdownItem onClick={()=>setDoctorType('physiotherapy')}>physiotherapy</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>Category</span>
                                        <br />
                                        <UncontrolledDropdown className='w-100'>
                                            <DropdownToggle>
                                              {category}  <input value={category} className='d-none'/>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={()=>setCategory('pediatricians')}>pediatricians</DropdownItem>
                                                <DropdownItem onClick={()=>setCategory('bodylogist')}>bodylogist</DropdownItem>
                                                <DropdownItem onClick={()=>setCategory('neorologist')}>neorologist</DropdownItem>
                                                <DropdownItem onClick={()=>setCategory('adbminnew2')}>adbminnew2</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span> Name</span>
                                        <input type="text" class="form-control" placeholder="Username" name="clinician_name" value="" required="" />
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>Email</span>
                                        <input type="text" class="form-control" placeholder="email" name="email_id" value="" required="" />
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>Password</span>
                                        <input type="text" class="form-control" placeholder="password" name="password" value="" required="" />
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>Phone</span>
                                        <input type="text" class="form-control" placeholder="phone" name="phone" value="" required="" />
                                    </div>
                                    <div class="form-check mt-2"> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" /> <label class="form-check-label" for="flexCheckChecked"> I agree to the terms and conditions of <a href="" class="login">Privacy &amp; Policy</a> </label> </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <button class="btn btn-success register btn-block" type="submit" name="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center mt-5"> <img src="https://i.imgur.com/98GXnDD.png" width="400" /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer_copyright />
        </>
    )
}

export default index
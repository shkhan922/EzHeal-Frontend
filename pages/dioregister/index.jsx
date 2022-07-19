import React from 'react';
import { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Footer_copyright from '~/components/ReusableComponent/Footer_copyright';
import { DashbordPanelHeader } from '~/components/ReusableComponent/DashbordPanelHeader';

const index = () => {

    const [city, setCity] = useState('select')
    const [category, setCategory] = useState('select')
    return (
        <>
            <div className="main-navbar">
                <DashbordPanelHeader />
            </div>
            <div>
                <h2 className='mt-5' style={{ color: "#224e77", textAlign: "center" }}> Diagnostic Register </h2>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card w-100 my-5 p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form">
                                <h2>Register</h2>
                                <form class="signup-form" enctype="multipart/form-data" method="post" action="">
                                    <div class="inputbox mt-3">
                                        <span>Center Name</span>
                                        <input type="text" class="form-control " placeholder="Username" name="clinician_name" value="" required="" />
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>Email</span>
                                        <input type="email" class="form-control " placeholder="email" name="email_id" value="" required="" />
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>Password</span>
                                        <input type="password" class="form-control " placeholder="password" name="password" value="" required="" />
                                    </div>
                                    <div class="inputbox mt-3 mb-3">
                                        <span>Phone</span>
                                        <input type="text" class="form-control " placeholder="phone" name="phone" value="" required="" />
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>City</span>
                                        <UncontrolledDropdown className='w-100'>
                                            <DropdownToggle className=' form-control'>
                                                {city}  <input value={city} className='d-none' />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => setCity('Bhopal')}>Bhopal</DropdownItem>
                                                <DropdownItem onClick={() => setCity('Indore')}>Indore</DropdownItem>
                                                <DropdownItem onClick={() => setCity('Banglore')}>Banglore</DropdownItem>
                                                <DropdownItem onClick={() => setCity('Dhar')}>Dhar</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                    <div class="inputbox mt-3">
                                        <span>Category</span>
                                        <br />
                                        <UncontrolledDropdown className='w-100'>
                                            <DropdownToggle className=' form-control'>
                                                {category}  <input value={category} className='d-none' />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => setCategory('Shanti City')}>Shanti City</DropdownItem>
                                                <DropdownItem onClick={() => setCategory('Sai City')}>Sai City</DropdownItem>
                                                <DropdownItem onClick={() => setCategory('Mr 9 Square')}>Mr 9 Square</DropdownItem>
                                                <DropdownItem onClick={() => setCategory('New Colony')}>New Colony</DropdownItem>
                                                <DropdownItem onClick={() => setCategory('Jai Nagar')}>Jai Nagar</DropdownItem>
                                                <DropdownItem onClick={() => setCategory('Vijay Nagar')}>Vijay Nagar</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                    <div class="inputbox mt-3 mb-3">
                                        <span>Price</span>
                                        <input type="text" class="form-control " placeholder="price" name="price" value="" required="" />
                                    </div>
                                    <div>
                                        <label for="formFileLg" class="form-label">Image (Type : jpg/png)</label>
                                        <input class="form-control form-control-lg" id="formFileLg" type="file" />
                                    </div>
                                    <div class="form-check mt-2 mb-1 ps-0"> <input type="checkbox" value="" id="flexCheckChecked" /> <label class="form-check-label" for="flexCheckChecked"> I agree to the terms and conditions of <a href="" class="login text-pink">Privacy &amp; Policy</a> </label> </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <button class="btn bg-pink text-white register btn-block" type="submit" name="submit" style={{ width: '200px', height: '50px' }}>Register</button>
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
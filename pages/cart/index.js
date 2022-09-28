import React, { useContext } from 'react'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header';
import { useSelector, useDispatch } from "react-redux"
import { Tab, Tabs, Modal } from 'react-bootstrap'
import { useEffect } from 'react';
import Link from 'next/link';
import userContext from '~/context/userContext';
import { span, Input, Label, Spinner, Alert } from 'reactstrap';
import * as Yup from "yup";
import Axios from 'axios';
import { useFormik } from "formik";
import axios from 'axios';
import { baseUrl } from '~/lib/api';
import { useState } from 'react';

const Index = () => {

  const { cartItem } = useSelector(state => state.custome);
  const [modalShow, setModalShow] = React.useState(false);
  const [patients, setPatients] = useState([]);
  const [address, setAddress] = useState([])
  const [detialId, setDetailId] = useState();
  const [formDisplay, setFormDisplay] = useState('d-none');
  const [formDisplay1, setFormDisplay1] = useState('d-none');
  const [key, setKey] = useState('patientDetails');
  const [key1, setKey1] = useState('cart');
  const [userinfo, setUserInfo] = useState({
    pateintId: []
  });
  const [selectedAddress, setSelectedAddress] = useState();
  const [selectedDioCenter, setSelectedDioCenter] = useState([]);


  // orderRview state
  const [selectSlot, setSelectedSlot] = useState();
  let selctedPatients = []
  let selected_Address = {}

  const BookingID = 'EZL' + (new Date()).getTime()
  const dispatch = useDispatch()
  const user = useContext(userContext)
  const removeItem = (id) => {
    dispatch({
      type: "removeFromCart",
      payload: id
    })
  }
  const clearCart = () => {
    dispatch({
      type: "clearCart"
    })
  }
  let totalPrice = (cartItem && cartItem.length > 0) ? cartItem.reduce((accumulator, object) => {
    return accumulator + object.User_Price;
  }, 0) : 0;

  let collectionCharge = 0;

  const getPateint = async () => {
    let userId = user.data.id;
    await axios.get(`${baseUrl}/users/${userId}?populate=deep`).then(res => { setPatients(res.data.detail.Patient); setAddress(res.data.detail.Address); setDetailId(res.data.detail.id); }).catch(e => console.log(e))
    // console.log(patients) 
  }

  useEffect(() => {
    user && getPateint(); getSelectedDioCenter();
  }, [user])

  useEffect(() => {
    patients.length > 0 ? setFormDisplay('d-none') : setFormDisplay('d-block')
    address.length > 0 ? setFormDisplay1('d-none') : setFormDisplay1('d-block')
  },[patients,address])

  let dioQuery = cartItem.map((item) => `filters[Name][$eq]=${item.dioCenter.label}`).join('&')
  // console.log(selectedDioName)
  const getSelectedDioCenter = () => {
    axios.get(`${baseUrl}/diagnostic-centers?${dioQuery}&populate=deep`).then(res => setSelectedDioCenter(res.data.data)).catch(e => console.log(e))
  }

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: '',
      age: '',
      gender: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Name"),
      age: Yup.number().required("Please Enter Age"),
      gender: Yup.string().required()
    }),
    onSubmit: (initialValues) => {
      axios.put(`${baseUrl}/details/${detialId}`, {
        data: {
          Patient: [...patients,
          {
            Name: initialValues.name,
            Age: initialValues.age,
            Gender: initialValues.gender
          }
          ]
        }
      }).then(() => { getPateint(); setFormDisplay('d-none') })
    }
  });

  const addressValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      address: '',
      pincode: '',
      locality: '',
      landmark: '',
      city: '',
      state: '',
      mobile: '',
      address_type: ''
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Please Enter Name"),
      pincode: Yup.number().required("Please Enter Age"),
      locality: Yup.string().required("please Enter Locality"),
      landmark: Yup.string().required('Please Enter Landmark'),
      city: Yup.string().required('Please Enter City'),
      state: Yup.string().required('Please Enter State'),
      mobile: Yup.number().required('Please Enter Mobile'),
      // address_type: Yup.string().required('Please Select Address Type')
    }),
    onSubmit: (initialValues) => {

      console.log(initialValues)
      axios.put(`${baseUrl}/details/${detialId}`, {
        data: {
          Address: [...address, initialValues]
        }
      }).then(() => { getPateint(); setFormDisplay1('d-none') }).catch(e => console.log(e))
    }
  });
  //for selected value of patients
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    const { pateintId } = userinfo;

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        pateintId: [...pateintId, parseInt(value)]
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        pateintId: pateintId.filter((e) => e !== parseInt(value))
      });
    }
  };

  const setDetailsOnOrderReview = () => {

    for (let i = 0; i < userinfo.pateintId.length; i++) {
      patients.map((item) => {
        if (item.id == userinfo.pateintId[i]) {
          selctedPatients.push(item)
        }
      })
    }

    selected_Address = address.find((item) => {
      return item.id == selectedAddress
    });

  }
  setDetailsOnOrderReview();

  const makePayment = async (sum) => {
    console.log("here...");

    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST", body: (totalPrice * selctedPatients.length) + collectionCharge }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "MOMEKZ PVT LTD",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Payment for the healt care Product",
      //   image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        axios.post(`${baseUrl}/bookings`, {
          data: {
            lab: selectedDioCenter[0].attributes.Name,
            slot: selectSlot,
            scans: cartItem.map(d => { return { scan_code: d.Test_Code } }),
            Price: (totalPrice * selctedPatients.length) + collectionCharge,
            PatientDetails: selctedPatients.map((d) => { return { Gender: d.Gender, Age: d.Age, Name: d.Name } }),
            Address: {
              pincode: selected_Address.pincode,
              address: selected_Address.address,
              locality: selected_Address.locality,
              landmark: selected_Address.landmark,
              city: selected_Address.city,
              state: selected_Address.state,
              address_type: selected_Address.address_type
            },
            users_permissions_user: user.data.id,
            BookingID: BookingID,
            razorpay_paymentID:response.razorpay_payment_id 
          }
        }).then(res => {
          console.log(res);
          setKey1('payment');
          clearCart();
        }).catch(e => console.log(e))
      },
      prefill: {
        name: user.data.username,
        email: user.data.email,
        contact: user.data.mobile,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <>
      <Header />
      <div className='row p-5'>
        <div className='col-md-8'>
          <Tabs
            id="controlled-tab-example"
            activeKey={key1}
            onSelect={(k) => setKey1(k)}
            className="mb-3"
          >
            <Tab eventKey="cart" title="1 Cart">
              <div>
                <h5>Order Overveiw</h5>
                <div className="card mb-4">
                  <div className='card-header'>
                    <div className='d-flex justify-content-between'>
                      <span>Lab Tests({cartItem ? cartItem.length : 0})</span> <Link href='/diognostic-center'><a> <span className='text-primary'><i className="fa-solid fa-plus pe-2"></i>Add More Test</span></a></Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>

                      {
                        (cartItem && cartItem.length > 0) ?
                          cartItem.map((item, index) => {
                            return (
                              <div className='border mb-3 rounded-2' key={item.id}>
                                <div className='bg-light p-3 '>
                                  <h4>{item.dioCenter.label}</h4>
                                  <span>{item.city.label}</span>
                                </div>
                                <div className='px-5 py-3 d-flex justify-content-between'>
                                  <div>
                                    <h6>{item.Billing_Name}</h6>
                                    <span>{item.Modality}</span><span className='ps-2'>({item.Test_Code})</span>
                                  </div>

                                  <div className='d-flex flex-column align-items-end'>
                                    <div className='mb-3'>
                                      <strong className='text-center'>₹{item.User_Price}</strong>
                                      <br />
                                      <strike>₹{item.MRP}</strike><br />
                                    </div>
                                    <small className='text-danger cursor-pointer' onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash-can pe-2"></i>Remove</small>
                                  </div>
                                </div>


                              </div>
                            )
                          }) : <><div className='p-5 m-4 d-flex align-items-center justify-content-center flex-column'>
                            <h5>Your Cart is Empty !</h5>
                            <button className='btn btn-success'>
                              <Link href='/diognostic-center'><span className='text-white'>Go to Shop</span></Link>
                            </button>
                          </div></>
                      }

                    </div>
                  </div>
                </div>
                {/* <div className="card">
                <div className='card-header'>
                  <div className='d-flex justify-content-between'>
                    <span>Patient Details</span> <Link href='#'><a> <span className='text-primary'><i className="fa-solid fa-pencil pe-2"></i>Edit Detials</span></a></Link>
                  </div>
                </div>
                <div className="card-body">

                </div>
              </div> */}
              </div>
            </Tab>
            <Tab eventKey="orderReview" title="2 Order Review">
              <div className='card mb-4'>
                <div className="card-header d-flex justify-content-between">
                  <span>Details</span><span className='cursor-pointer' onClick={() => setModalShow(true)}><i className="fa-solid fa-pen-to-square"></i></span>
                </div>
                <div className="card-body">
                  <div className='row'>
                    <div className="col-md-4">
                      <h6>Patients ({selctedPatients && selctedPatients.length ? selctedPatients.length : 0})</h6>
                      {
                        selctedPatients?.map((item, index) => {
                          return (
                            <div key={item.id} className='mb-3'>
                              <div><strong>Name</strong> : <span>{item.Name}</span></div>
                              <div><strong>Age</strong> : <span>{item.Age}</span></div>
                              <div><strong>Gender</strong> : <span>{item.Gender}</span></div>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="col-md-4">
                      <h5>Address</h5>
                      <div>
                        <p>For Home Sample Collection</p>
                        {
                          selected_Address && <>
                            <p>{selected_Address.address_type} <br />{selected_Address.address} <br /> {selected_Address.locality}, <br /> {selected_Address.city}, {selected_Address.state}, {selected_Address.pincode} </p>
                          </>
                        }

                      </div>
                    </div>
                    <div className="col-md-4">
                      {
                        selectedDioCenter && selectedDioCenter.length > 0 && <>
                          <h5>{selectedDioCenter[0].attributes.Name}</h5>
                          <strong>Slot</strong> : <span>{selectSlot}</span>
                        </>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className='card-header'>
                  <div className='d-flex justify-content-between'>
                    <span>Lab Tests({cartItem ? cartItem.length : 0})</span> <Link href='/diognostic-center'><a> <span className='text-primary'><i className="fa-solid fa-plus pe-2"></i>Add More Test</span></a></Link>
                  </div>
                </div>
                <div className="card-body">
                  <div>

                    {
                      (cartItem && cartItem.length > 0) ?
                        cartItem.map((item, index) => {
                          return (
                            <div className='border mb-3 rounded-2' key={item.id}>
                              <div className='bg-light p-3 '>
                                <h4>{item.dioCenter.label}</h4>
                                <span>{item.city.label}</span>
                              </div>
                              <div className='px-5 py-3 d-flex justify-content-between'>
                                <div>
                                  <h6>{item.Billing_Name}</h6>
                                  <span>{item.Modality}</span><span className='ps-2'>({item.Test_Code})</span>
                                </div>

                                <div className='d-flex flex-column align-items-end'>
                                  <div className='mb-3'>
                                    <strong className='text-center'>₹{item.User_Price}</strong>
                                    <br />
                                    <strike>₹{item.MRP}</strike><br />
                                  </div>
                                  <small className='text-danger cursor-pointer' onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash-can pe-2"></i>Remove</small>
                                </div>
                              </div>


                            </div>
                          )
                        }) : <><div className='p-5 m-4 d-flex align-items-center justify-content-center flex-column'>
                          <h5>Your Cart is Empty !</h5>
                          <button className='btn btn-success'>
                            <Link href='/diognostic-center'><span className='text-white'>Go to Shop</span></Link>
                          </button>
                        </div></>
                    }

                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="payment" title="3 Payment" >
              <div className='p-4 d-flex align-items-center justify-content-center flex-column'>
                <h4>Thank You !</h4>
                <p>Your Booking is generated successfully. and your booking ID is </p>
                  <div>
                    
                  </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className='col-md-4'>
          <div className='bg-light p-3'>
            <div className='card p-3 mb-3'>
              <div className='d-flex mb-2 justify-content-between'><span>Total MRP</span><span>₹{totalPrice}</span></div>
              {/* <div className='d-flex mb-2 justify-content-between'><span>Price Discount</span><span>-₹2404</span></div> */}
              <div className='d-flex mb-2 justify-content-between'><span>Collection Charge</span><span>₹{collectionCharge}</span></div>
              <div className='d-flex mb-2 justify-content-between'><span>Pateints</span><span>{selctedPatients.length}</span></div>
              <div className='d-flex mb-2 justify-content-between'><h5>Total Amount</h5><h5>₹{(totalPrice * selctedPatients.length) + collectionCharge}</h5></div>
            </div>
            {
              key1 == 'orderReview' ? <button className='btn btn-success w-100' onClick={() => makePayment()}>PAYMENT</button> :
                <button className='btn btn-success w-100' onClick={() => user ? setModalShow(true) : alert("please Login to Schedule")}>SCHEDULE</button>
            }

          </div>
        </div>
      </div>
      <Footer />
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Schedule Booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="patientDetails" title="patient Details">
              <div className='p-3'>

                {
                  patients?.map((item) => {
                    return (
                      <>
                        <div>
                          <div className="boder p-3" key={item.id}>
                            <div>
                              <input type="checkbox" name='patient' value={item.id} onChange={handleChange} />
                              <span className='m-2'><span className='me-1'>name</span>: <span>{item.Name}</span></span>
                              <span className='m-2'><span className='me-1'>age</span>: <span>{item.Age}</span></span>
                              <span className='m-2'><span className='me-1'>gender</span>: <span>{item.Gender}</span></span>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
                <div className={formDisplay}>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }} action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <input className='form-control' placeholder='Name' type="text" name="name" id="name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.name || ""}
                          invalid={
                            validation.touched.name && validation.errors.name ? true : false
                          } />
                        {validation.touched.name && validation.errors.name ? (
                          <span className='text-danger'>{validation.errors.name}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input className='form-control' placeholder='Age' type="number" name="age" id="age"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.age || ""}
                          invalid={
                            validation.touched.age && validation.errors.age ? true : false
                          } />
                        {validation.touched.age && validation.errors.age ? (
                          <span className='text-danger'>{validation.errors.age}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6 pt-4">
                        <input className='me-1' type="radio" id="Male" name="gender" value="Male"
                          onChange={validation.handleChange}
                          invalid={
                            validation.touched.username && validation.errors.username ? true : false
                          }
                        />
                        <label htmlFor="male" className='me-3'>Male</label>
                        <input className='me-1' type="radio" id="Female" name="gender" value="Female"
                          onChange={validation.handleChange}
                        // invalid={
                        //    validation.errors.gender ? true : false
                        // }
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                    </div>
                    <button className='btn default-btn px-3 py-2 rounded' type='submit'>submit</button>
                  </form>
                </div>

                <span className={`btn text-primary ${formDisplay == 'd-block' ? 'd-none' : 'd-block'}`} onClick={() => setFormDisplay('d-block')}>+ ADD New Patient</span>
                <button className='float-end btn default-btn px-3 py-2 rounded' onClick={() => { userinfo.pateintId.length > 0 ? setKey("addressDetials") : alert('please select atleast one patient') }}>Next</button>
              </div>
            </Tab>
            <Tab eventKey="addressDetials" title="Address Details">
              <div className='p-3'>

                {
                  address?.map((item) => {
                    return (
                      <>
                        <div>
                          <div className="boder p-3" key={item.id}>
                            <div>
                              {/* <input type="checkbox" name='patient' value={item.id} onChange={handleChange} /> */}
                              <div className='d-flex'>
                                <span className='me-2'><input type="radio" name='address' value={item.id} onChange={(e) => setSelectedAddress(e.target.value)} /></span>
                                <div>
                                  <div><span>{item.address_type}</span></div>
                                  <span><span>{item.address},{item.locality}, {item.city}, {item.state}, {item.pincode}</span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
                <div className={formDisplay1 + " mb-3"}>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    addressValidation.handleSubmit();
                    return false;
                  }} action="#">
                    <div className="row gy-3 mb-3">
                      <div className="col-md-6">
                        <input className='form-control' placeholder='Address' type="text" name="address" id="address"
                          onChange={addressValidation.handleChange}
                          onBlur={addressValidation.handleBlur}
                          value={addressValidation.values.address || ""}
                          invalid={
                            addressValidation.touched.address && addressValidation.errors.address ? true : false
                          } />
                        {addressValidation.touched.address && addressValidation.errors.address ? (
                          <span className='text-danger'>{addressValidation.errors.address}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input className='form-control' placeholder='Pincode' type="number" name="pincode" id="pincode"
                          onChange={addressValidation.handleChange}
                          onBlur={addressValidation.handleBlur}
                          value={addressValidation.values.pincode || ""}
                          invalid={
                            addressValidation.touched.pincode && addressValidation.errors.pincode ? true : false
                          } />
                        {addressValidation.touched.pincode && addressValidation.errors.pincode ? (
                          <span className='text-danger'>{addressValidation.errors.pincode}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input className='form-control' placeholder='Locality' type="text" name="locality" id="locality"
                          onChange={addressValidation.handleChange}
                          onBlur={addressValidation.handleBlur}
                          value={addressValidation.values.locality || ""}
                          invalid={
                            addressValidation.touched.locality && addressValidation.errors.locality ? true : false
                          } />
                        {addressValidation.touched.locality && addressValidation.errors.locality ? (
                          <span className='text-danger'>{addressValidation.errors.locality}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input className='form-control' placeholder='Landmark' type="text" name="landmark" id="landmark"
                          onChange={addressValidation.handleChange}
                          onBlur={addressValidation.handleBlur}
                          value={addressValidation.values.landmark || ""}
                          invalid={
                            addressValidation.touched.landmark && addressValidation.errors.landmark ? true : false
                          } />
                        {addressValidation.touched.landmark && addressValidation.errors.landmark ? (
                          <span className='text-danger'>{addressValidation.errors.landmark}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input className='form-control' placeholder='City' type="text" name="city" id="city"
                          onChange={addressValidation.handleChange}
                          onBlur={addressValidation.handleBlur}
                          value={addressValidation.values.city || ""}
                          invalid={
                            addressValidation.touched.city && addressValidation.errors.city ? true : false
                          } />
                        {addressValidation.touched.city && addressValidation.errors.city ? (
                          <span className='text-danger'>{addressValidation.errors.city}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input className='form-control' placeholder='State' type="text" name="state" id="state"
                          onChange={addressValidation.handleChange}
                          onBlur={addressValidation.handleBlur}
                          value={addressValidation.values.state || ""}
                          invalid={
                            addressValidation.touched.state && addressValidation.errors.state ? true : false
                          } />
                        {addressValidation.touched.state && addressValidation.errors.state ? (
                          <span className='text-danger'>{addressValidation.errors.state}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <input className='form-control' placeholder='Mobile Number' type="number" name="mobile" id="mobile"
                          onChange={addressValidation.handleChange}
                          onBlur={addressValidation.handleBlur}
                          value={addressValidation.values.mobile || ""}
                          invalid={
                            addressValidation.touched.mobile && addressValidation.errors.mobile ? true : false
                          }
                        />
                        {addressValidation.touched.mobile && addressValidation.errors.mobile ? (
                          <span className='text-danger'>{addressValidation.errors.mobile}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6 ">
                        <input className='me-1' type="radio" id="Home" name="address_type" value="Home"
                          onChange={addressValidation.handleChange} />
                        <label htmlFor="Home" className='me-3'>Home</label>
                        <input className='me-1' type="radio" id="Office" name="address_type" value="Office"
                          onChange={addressValidation.handleChange}
                        />
                        <label htmlFor="Office" className='me-3'>Office</label>
                        <input className='me-1' type="radio" id="Other" name="address_type" value="Other"
                          onChange={addressValidation.handleChange}
                        />
                        <label htmlFor="Other">Other</label>
                        {validation.touched.address_type && validation.errors.address_type ? (
                          <span className='text-danger'>{validation.errors.address_type}</span>
                        ) : null}
                      </div>
                    </div>
                    <button className='btn default-btn px-3 py-2 rounded' type='submit' >submit</button>
                  </form>
                </div>

                <span className={`btn text-primary ${formDisplay1 == "d-block" ? "d-none" : "d-block"}`} onClick={() => setFormDisplay1('d-block')}>+ ADD New Address</span>
                <button className='float-end btn default-btn px-3 py-2 rounded' onClick={() => { selectedAddress ? (setKey("slot"), getSelectedDioCenter()) : alert('please select address') }}>Next</button>
              </div>
            </Tab>
            <Tab eventKey="slot" title="Slot" >
              <div className='p-4'>
                {
                  // selectedDioCenter((item, index) => {
                  // return (
                  <div>
                    {
                      selectedDioCenter && selectedDioCenter.length > 0 && <>
                        <h5>{selectedDioCenter[0].attributes.Name}</h5>
                        {
                          selectedDioCenter[0].attributes.slot.map((data) => {
                            return (
                              <div>
                                <input type="radio" className='me-2' name='slot' value={data.from + " - " + data.to} onChange={(e) => setSelectedSlot(e.target.value)} />
                                <span>{data.from} - {data.to}</span>
                              </div>)
                          })
                        }
                      </>
                    }

                  </div>
                }

              </div>
              <button className='float-end btn default-btn px-3 py-2 rounded' onClick={() => { selectSlot ? (setKey1('orderReview'), setModalShow(false)) : (alert('Please select slot !')) }}>Finish</button>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger' onClick={() => setModalShow(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Index
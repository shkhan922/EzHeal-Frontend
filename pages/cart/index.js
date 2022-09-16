import React from 'react'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header';
import { useSelector, useDispatch } from "react-redux"
import { Tab, Tabs, Modal } from 'react-bootstrap'
import { useEffect } from 'react';
import Link from 'next/link';

const Index = () => {

  const { cartItem } = useSelector(state => state.custome);
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch()
  console.log(cartItem)

  const removeItem = (id) => {
    dispatch({
      type: "removeFromCart",
      payload: id
    })
  }
  let totalPrice = (cartItem && cartItem.length > 0) ? cartItem.reduce((accumulator, object) => {
    return accumulator + object.User_Price;
  }, 0) : 0;

  let collectionCharge = 0;

  return (
    <>
      <Header />
      <div className='row p-5'>
        <div className='col-md-8'>
          <Tabs
            defaultActiveKey="cart"
            id="uncontrolled-tab-example"
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
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="payment" title="3 Payment" >
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        </div>
        <div className='col-md-4'>
          <div className='bg-light p-3'>
            <div className='card p-3 mb-3'>
              <div className='d-flex mb-2 justify-content-between'><span>Total MRP</span><span>₹{totalPrice}</span></div>
              {/* <div className='d-flex mb-2 justify-content-between'><span>Price Discount</span><span>-₹2404</span></div> */}
              <div className='d-flex mb-2 justify-content-between'><span>Collection Charge</span><span>₹{collectionCharge}</span></div>
              <div className='d-flex mb-2 justify-content-between'><h5>Total Amount</h5><h5>₹{totalPrice + collectionCharge}</h5></div>
            </div>
            <button className='btn btn-success w-100' onClick={() => setModalShow(true)}>SCHEDULE</button>
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
            defaultActiveKey="patientDetails"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="patientDetails" title="patient Details">
              <div className='p-3'>
                <div className="row">
                  <div className="col-md-6">
                    <input className='form-control' placeholder='Name' type="text" name="" id="" />
                  </div>
                  <div className="col-md-6">
                    <input className='form-control' placeholder='Age' type="text" name="" id="" />
                  </div>
                  <div className="col-md-6 pt-4">
                    <input className='me-1' type="radio" id="male" name="gender" value="male" />
                    <label for="male" className='me-3'>Male</label>
                    <input className='me-1' type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label>
                  </div>
                </div>
                <span className='float-end btn text-primary'>+ ADD New Patient</span>
              </div>
            </Tab>
            <Tab eventKey="addressDetials" title="Address Details">
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="slot" title="Slot" >
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setModalShow(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Index
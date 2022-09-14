import React from 'react'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header';
import { useSelector, useDispatch } from "react-redux"
import { Tab, Tabs, Modal } from 'react-bootstrap'
import { useEffect } from 'react';
import Link from 'next/link';

const Index = () => {

  const { cartItem } = useSelector(state => state.custome);
  const { cartItems } = useSelector(state => state.getCartItems);
  const [modalShow, setModalShow] = React.useState(false);
  const result = useSelector(state => state.getCartItems);
  console.log(result);

  // result.then(res => console.log(res)).catch(e =>  console.log(e))
  const dispatch = useDispatch()

  const getCartItems = (ids) => {
    dispatch({
      type: "getCartItemsByIds",
      payload: ids
    })
  }


  useEffect(() => {
    getCartItems(cartItem)
  }, [cartItem])
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
                    <span>Lab Tests(3)</span> <Link href='#'><a> <span className='text-primary'><i className="fa-solid fa-plus pe-2"></i>Add More Test</span></a></Link>
                  </div>
                </div>
                <div className="card-body">

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
                <div className='d-flex mb-2 justify-content-between'><span>Total MRP</span><span>₹5457</span></div>
                <div className='d-flex mb-2 justify-content-between'><span>Price Discount</span><span>-₹2404</span></div>
                <div className='d-flex mb-2 justify-content-between'><span>Collection Charge</span><span>₹50</span></div>
                <div className='d-flex mb-2 justify-content-between'><h5>Collection Charge</h5><h5>₹50</h5></div>
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
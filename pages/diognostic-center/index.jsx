import React from 'react'
import Hero from '~/components/ReusableComponent/Hero'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Index = () => {
  return (
    <>
    <Header/>
    <Hero bg='item-bg-3' title='Diagnostic Centers'/>
    
    
    <div className='container' style={{ paddingTop:'3rem', paddingBottom:'3rem'}}>
      <div className='row' style={{ display:'flex', justifyContent:'space-evenly', flexDirection:'row'}}>
         
      <Card style={{ width: '18rem', paddingRight: '2rem' }}>
      <Card.Body>
        <Card.Title>Test Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Price </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Pay Now</Button>
        
        
        
      </Card.Body>
      </Card>
         
      
        
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Test Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Button variant="primary">Pay Now</Button>
      </Card.Body>
    </Card>
        
    
      </div>
      </div>
    
    <Footer/>
    
    </>
  )
}

export default Index
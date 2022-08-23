import React from 'react'
import Hero from '~/components/ReusableComponent/Hero'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { baseUrl, baseUrlImage } from '~/lib/api'

const Index = ({posts}) => {

  

  return (
    <>
    <Header/>
    <Hero bg='item-bg-6' title='Diagnostic Centers'/>
    
    
    <div className='container' style={{ paddingTop:'3rem', paddingBottom:'3rem'}}>
      <div className='row' style={{ display:'flex', justifyContent:'space-evenly', flexDirection:'row'}}>
       {
              ((posts || []).map((data, index) => {
                return (   
      <Card style={{ width: '18rem', paddingRight: '2rem' }}>
      <Card.Body>
      <span>Test Code</span><Card.Title>{data.attributes.Test_Code}</Card.Title>
      <span>Name</span><Card.Title>{data.attributes.Billing_Name}</Card.Title>
      <span>MRP</span><Card.Subtitle className="mb-2 text-muted">{data.attributes.MRP} </Card.Subtitle>
      <span>Discount Price</span>
      <Card.Subtitle className="mb-2 text-muted">{data.attributes.User_Price}</Card.Subtitle>
      <span>Modality</span>
        <Card.Text>
          {data.attributes.Modality}
        </Card.Text>
        <Button variant="primary">Pay Now</Button>
        
        
        
      </Card.Body>
      </Card>
         )
        }))
      }       
    
      </div>
      </div>
    
    <Footer/>
    
    </>
  )
}

export default Index


export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const param = `scans?populate=deep`
  const res = await fetch(`${baseUrl}/${param}`);
  const posts = await res.json();

  console.log(posts.data)
  
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.data,
    },
  }
}

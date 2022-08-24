import React from 'react'
import Hero from '~/components/ReusableComponent/Hero'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { baseUrl, baseUrlImage } from '~/lib/api'
import Carousel from "react-multi-carousel";
import DownloadAppSection from '~/components/HomeComponent/DownloadAppSection'
import { DownloadImg, DownloadH1 } from 'pages/index'
import Image from 'next/image';

const Index = ({posts, diapagedata}) => {

  const labsbanners = diapagedata[0].attributes.labsbanners;
  const smallBanners = diapagedata[0].attributes.smallBanners;
  console.log(labsbanners)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
    <Header/>
    
    <section className="section section-features">
      <div className="container-fluid">
        <div className="row">
          <div className='col-lg-6' style={{ paddingLeft:'6rem', paddingTop:`4rem` }}>
          {/* <Image width={439} height={192} src={baseUrlImage+data.attributes.url} alt='ezheal' /> */}
          <h2 style={{fontSize:`22px`}}>Lab Test and Scans at the ease of your home</h2>
          <p>50,000+ lab tests booked | 20,00,000+ satisfied customers</p>
          <div>
            {/* s<Image/> */}
          </div>
          </div>
          <div className="col-md-4" style={{ paddingLeft:'4rem' }}>
            {/* <div className="section-header mb-0">
              <h3 className="mt-2 text-uppercase text-center" style={{ paddingTop:'2rem', fontWeight: '400', color: '#333333', wordSpacing: '0.6rem' }}>Our Partner Certified Labs and Diagnostic Centers</h3>
              
            </div> */}

            <div style={{ paddingTop:'6rem'}}>

              <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive1}
                renderButtonGroupOutside={true}
                autoPlay={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-60-px"
              >
                {
                (smallBanners.data || []).map((data, index)=>
                  <div key={data.id}><Image width={439} height={192} src={baseUrlImage+data.attributes.url} alt='ezheal' /></div>
                )
              }
              </Carousel>

              
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="section section-features">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-12">
            <div className="section-header mb-0">
              <h3 className="mt-2 text-uppercase text-center" style={{ paddingTop:'2rem', fontWeight: '400', color: '#333333', wordSpacing: '0.6rem' }}>Our Partner Certified Labs and Diagnostic Centers</h3>
              
            </div>

            <div style={{ paddingTop:'6rem'}}>

              <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                renderButtonGroupOutside={true}
                autoPlay={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-60-px"
              >
                {
                (labsbanners.data || []).map((data, index)=>
                  <div><Image width={193} height={43} src={baseUrlImage+data.attributes.url} alt='ezheal' /></div>
                )
              }
              </Carousel>

              
            </div>

          </div>
        </div>
      </div>
    </section>

    
    <div className='container' style={{ paddingTop:'4rem', paddingBottom:'3rem'}}>
      <div className='row' style={{ display:'flex', justifyContent:'space-evenly', flexDirection:'row'}}>
       {
              ((posts || []).map((data, index) => {
                return (   
      <Card key={data.id} style={{ width: '18rem', paddingRight: '2rem', marginBottom:'2rem' }}>
      <Card.Body>
      <span>Test Code</span><Card.Title>{data.attributes.Test_Code}</Card.Title>
      <Card.Title><h3>{data.attributes.Billing_Name}</h3></Card.Title>
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
    {/* <DownloadAppSection DownloadImg={`${baseUrlImage}${DownloadImg}`} DownloadH1={DownloadH1}/> */}
    {/* DownloadImg={`${baseUrlImage}${DownloadImg}`} DownloadH1={DownloadH1} */}
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

  const param2 = `diagnostic-center-pages?populate=deep`
  const data = await fetch(`${baseUrl}/${param2}`);
  const diapage = await data.json();

  console.log(diapage.data)
  
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.data,
      diapagedata:diapage.data,
    },
  }
}

import React, { useState } from 'react'
import Hero from '~/components/ReusableComponent/Hero'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { baseUrl, baseUrlImage } from '~/lib/api'
import Carousel from "react-multi-carousel";
import DownloadAppSection from '~/components/HomeComponent/DownloadAppSection'
import { DownloadImg, DownloadH1 } from 'pages/index'
import Image from 'next/image'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';

const Index = ({ posts, diapagedata, cities }) => {

  // const myState = useSelector((state) => state.changeCartNum)
  // console.log(myState)

  const dispatch = useDispatch()

  const handleAddToCart = (id) => {
    dispatch({
      type:"addToCart",
      payload:id
    })
  }

  // const handleRemoveCartItem = (id) => {
  //   dispatch({
  //     type:"removeFromCart",
  //     payload:id
  //   })
  // }

  const [city, setCity] = useState();
  const [dioCenter, setDioCenter] = useState();
  const [scan, setScan] = useState();

  const labsbanners = diapagedata[0].attributes.labsbanners;
  const smallBanners = diapagedata[0].attributes.smallBanners;
  const citiesOptions = cities.map((item) => {
    return { label: item.attributes.Name, value: item.attributes.Name }
  })
  let dioOption = [];
  let dioArray = [];
  if (city) {
    for (let i = 0; i < cities.length; i++) {
      if (city.value == cities[i].attributes.Name) {
        dioOption = cities[i].attributes.diagnostic_centers.data.map((item, index) => {
          return { label: item.attributes.Name, value: item.attributes.Name }
        })
        dioArray = cities[i].attributes.diagnostic_centers.data
      }
    }
  }

  let scanOptions = []
  let scans = [];
  if (dioCenter) {
    for (let k = 0; k < dioArray.length; k++) {
      if (dioCenter.value == dioArray[k].attributes.Name) {
        console.log('matched')
        scanOptions = dioArray[k].attributes.scans.data.map((item, index) => {
          return { label: item.attributes.Billing_Name, value: item.attributes.Billing_Name }
        })
        scans = dioArray[k].attributes.scans.data
      }
    }
  }
  console.log(scanOptions)
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
      <Header />

      <section className="section section-features">
        <div className="container-fluid">
          <div className='row gx-2 mx-4 mt-4 gy-2'>
            <div className='col-md-3'>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={'Popular City'}
                isSearchable={true}
                name="color"
                value={city}
                onChange={(e) => setCity(e)}
                options={citiesOptions}
              />
            </div>
            <div className='col-md-3'>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={'Top Rated Labs'}
                isSearchable={true}
                name="color"
                value={dioCenter}
                onChange={(e) => setDioCenter(e)}
                options={dioOption}
              />
            </div>
            <div className='col-md-6'>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={'Search For Labs And Scans'}
                isSearchable={true}
                name="color"
                value={scan}
                onChange={(e) => setScan(e)}
                options={scanOptions}
              />
            </div>
          </div>
          <div className='container' style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
            <div className='row'>
              {
                scans ?
                  ((scans || []).map((data, index) => {
                    return (
                      <div key={data.id} className='col-lg-3 col-md-4 col-sm-6 py-2'>
                        <Card className='h-100 '>
                          <Card.Body>
                            <p className='fs-6 text-dark'>{data.attributes.Billing_Name}</p>
                            <img src="https://play-lh.googleusercontent.com/bTPyXNJW0JhpmabPrRt1nNATOb0oPXCD4_UQKFYJfDtT8n5QtrgEzXpPhGcMkefueA" width={70} alt="" />
                            <span className='badge bg-success ms-3'>4.5 <i className="fa-solid fa-star" style={{fontSize:'10px'}}></i></span>
                            <div>
                            <strong>Test Code</strong> : <span>{data.attributes.Test_Code}</span>
                            </div>
                            <div>
                            <strong>Price : </strong><span className="mb-2">₹{data.attributes.User_Price} <strike className='text-muted'> ₹{data.attributes.MRP} </strike> <span className='text-success ps-2'> {((1-(data.attributes.User_Price/data.attributes.MRP)) * 100).toFixed(0)}% Off</span></span>
                            </div>
                            <div className='mb-3'>   
                            <strong>Modality : </strong>
                            <span>
                              {data.attributes.Modality}
                            </span>
                            </div>                           
                            <button className='default-btn' onClick={() => handleAddToCart({id: data.id, Billing_Name:data.attributes.Billing_Name,Test_Code: data.attributes.Test_Code,User_Price:data.attributes.User_Price,MRP:data.attributes.MRP,Modality:data.attributes.Modality, city: city, dioCenter: dioCenter})}>Add to Cart</button>   
                            {/* <button className='default-btn' onClick={() => handleRemoveCartItem(data.id)}>Remove</button>                          */}
                          </Card.Body>
                        </Card>
                      </div>
                    )
                  })) : ''
              }

            </div>
          </div>
          <div className="row">
            <div className='col-lg-6' style={{ paddingLeft: '6rem', paddingTop: `4rem` }}>
              {/* <Image width={439} height={192} src={baseUrlImage+data.attributes.url} alt='ezheal' /> */}
              <h2 style={{ fontSize: `22px` }}>Lab Test and Scans at the ease of your home</h2>
              <p>50,000+ lab tests booked | 20,00,000+ satisfied customers</p>
              <div>
                {/* s<Image/> */}
              </div>
            </div>
            <div className="col-md-4" style={{ paddingLeft: '4rem' }}>
              {/* <div className="section-header mb-0">
              <h3 className="mt-2 text-uppercase text-center" style={{ paddingTop:'2rem', fontWeight: '400', color: '#333333', wordSpacing: '0.6rem' }}>Our Partner Certified Labs and Diagnostic Centers</h3>
              
            </div> */}

              <div style={{ paddingTop: '6rem' }}>

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
                    (smallBanners.data || []).map((data, index) =>
                      <div key={data.id}><Image width={439} height={192} src={baseUrlImage + data.attributes.url} alt='ezheal' /></div>
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
                <h3 className="mt-2 text-uppercase text-center" style={{ paddingTop: '2rem', fontWeight: '400', color: '#333333', wordSpacing: '0.6rem' }}>Our Partner Certified Labs and Diagnostic Centers</h3>

              </div>

              <div style={{ paddingTop: '6rem' }}>

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
                    (labsbanners.data || []).map((data, index) =>
                      <div key={data.id}><Image width={193} height={43} src={baseUrlImage + data.attributes.url} alt='ezheal' /></div>
                    )
                  }
                </Carousel>


              </div>

            </div>
          </div>
        </div>
      </section>



      {/* <DownloadAppSection DownloadImg={`${baseUrlImage}${DownloadImg}`} DownloadH1={DownloadH1}/> */}
      {/* DownloadImg={`${baseUrlImage}${DownloadImg}`} DownloadH1={DownloadH1} */}
      <Footer />

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

  const param3 = `cities?populate=deep`
  const data3 = await fetch(`${baseUrl}/${param3}`);
  const res3 = await data3.json();



  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.data,
      diapagedata: diapage.data,
      cities: res3.data
    },
  }
}

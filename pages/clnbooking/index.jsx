import React,{useState} from 'react'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '~/components/ReusableComponent/Header'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { baseUrl } from '~/lib/api';
import Card from 'react-bootstrap/Card';

function Index({cities, clinics, departments}) {
  const [city, setCity] = useState();
  const [clinic, setClinic] = useState();
  const [departmentv, setDepartment] = useState();
  const [doctor, setDoctor] = useState();

  const citiesOptions = cities.map((item) => {
    return { label: item.attributes.Name, value: item.attributes.Name }
  })
  let clinicOptions = [];
  let clinicsArr = [];
  if (city) {
    for (let i = 0; i < cities.length; i++) {
      if (city.value == cities[i].attributes.Name) {
        clinicOptions = cities[i].attributes.clinics.data.map((item, index) => {
          return { label: item.attributes.name, value: item.attributes.name }
        })
        clinicsArr = cities[i].attributes.clinics.data
      }
    }
  }

  let departmentOption = []
  let departmentArr = [];
  if (clinic) {
    for (let k = 0; k < clinics.length; k++) {
      if (clinic.value == clinics[k].attributes.name) {
        console.log('matched')
        departmentOption = clinics[k].attributes.departments.data.map((item, index) => {
          return { label: item.attributes.name, value: item.attributes.name }
        })
        departmentArr = clinics[k].attributes.departments.data
        
      }
    }
  }
  
  let doctorOptions = []
  let docotorsArr = [];
  
  if(departmentv){
    for (let k = 0; k < departments.length; k++) {
      if (departmentv.value == departments[k].attributes.name) {
        console.log('matched')
        doctorOptions = departments[k].attributes.doctors.data.map((item, index) => {
          return { label: item.attributes.name, value: item.attributes.name }
        })
        docotorsArr = departments[k].attributes.doctors.data
        
      }
    }
  }
  return (
    <div>

    <Header/>
    {/* <Appointment/> */}
    <div className='row gx-2 mx-4 mt-5 gy-2' style={{marginBottom:"200px"}}>
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
                placeholder={'Top Rated Clinics'}
                isSearchable={true}
                name="color"
                value={clinic}
                onChange={(e) => setClinic(e)}
                options={clinicOptions}
              />
            </div>
            <div className='col-md-6'>
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder={'Search for Departments'}
                isSearchable={true}
                name="color"
                value={departmentv}
                onChange={(e) => setDepartment(e)}
                options={departmentOption}
              />
            </div>
          </div>
          <div className='container' style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
            <div className='row'>
              {
                docotorsArr ?
                  ((docotorsArr || []).map((data, index) => {
                    return (
                      <div key={data.id} className='col-lg-3 col-md-4 col-sm-6 py-2'>
                        <Card className='h-100 '>
                          <Card.Body>
                            <h5 className='text-dark'>{data.attributes.name}</h5>
                            <img src="https://play-lh.googleusercontent.com/bTPyXNJW0JhpmabPrRt1nNATOb0oPXCD4_UQKFYJfDtT8n5QtrgEzXpPhGcMkefueA" width={70} alt="" />
                            {/* <span className='badge bg-success ms-3'>4.5 <i className="fa-solid fa-star" style={{fontSize:'10px'}}></i></span> */}
                            {/* <div>
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
                            </div>                            */}
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
    <Footer/>
   </div>
  )
}

export default Index;

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const param = `clinics?populate=deep`
  const res = await fetch(`${baseUrl}/${param}`);
  const clinics = await res.json();

  const param2 = `departments?populate=deep`
  const data = await fetch(`${baseUrl}/${param2}`);
  const departments = await data.json();

  const param3 = `cities?populate=deep`
  const data3 = await fetch(`${baseUrl}/${param3}`);
  const res3 = await data3.json();



  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      clinics: clinics.data,
      departments: departments.data,
      cities: res3.data
    },
  }
}
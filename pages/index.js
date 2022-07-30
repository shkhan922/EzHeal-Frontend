
import AboutSection from '~/components/HomeComponent/AboutSection'
import DoctorArea from '~/components/HomeComponent/DoctorArea'
import DownloadAppSection from '~/components/HomeComponent/DownloadAppSection'
import MainBanner from '~/components/HomeComponent/MainBanner'
import PartnerSection from '~/components/HomeComponent/PartnerSection'
import ServicesSection from '~/components/HomeComponent/ServicesSection'
import ShopSection from '~/components/HomeComponent/ShopSection'
import TestimonialSection from '~/components/HomeComponent/TestimonialSection'
import Footer from '~/components/ReusableComponent/Footer'
import Header from '../components/ReusableComponent/Header'
import { baseUrl, baseUrlImage } from '~/lib/api'

export default function Home({posts}) {

  const bannerh1=posts[0].attributes.bannertext;
  const imgurl= baseUrlImage+posts[0].attributes.bannerimg.data.attributes.formats.large.url;
  const bannerpara= posts[0].attributes.bannerdescrip;
  const consulth1= posts[0].attributes.ConsultH1;
  const consult_subh2=posts[0].attributes.Consult_Subh2;
  const ConsultImages =posts[0].attributes.ConsultImages
  const aboutimg = baseUrlImage+posts[0].attributes.Aboutimg.data[0].attributes.formats.small.url;
  const abouth1 = posts[0].attributes.AboutH1;
  const aboutdescp = posts[0].attributes.Aboutdescp;
  const serviceh1 =posts[0].attributes.serviceh1
  const servicepara = posts[0].attributes.servicepara
  const servicecard = posts[0].attributes.ServiceCard
  console.log(`${baseUrlImage}${ConsultImages[0].image.data[0].attributes.formats.small.url}`)
  
  return (
    
    <>
    
     <Header />
     <MainBanner bannerh1={bannerh1} imgurl={imgurl} bannerpara={bannerpara} />
     <PartnerSection consulth1={consulth1} consult_subh2={consult_subh2} ConsultImages={ConsultImages}/>
     <AboutSection aboutimg={aboutimg} abouth1={abouth1} aboutdescp={aboutdescp}/>
     <ServicesSection serviceh1={serviceh1} servicepara={servicepara} servicecard={servicecard} />
     <DoctorArea/>
     <ShopSection/>
     <TestimonialSection/>
     <DownloadAppSection/>
     <Footer/>
     
    </> 
   
  )
}

export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const param = `home-pages?populate=deep`
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


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
  const imgurl= baseUrlImage+posts[0].attributes.bannerimg.data.attributes.url;
  const bannerpara= posts[0].attributes.bannerdescrip;
  const consulth1= posts[0].attributes.ConsultH1;
  const consult_subh2=posts[0].attributes.Consult_Subh2;
  const ConsultImages =posts[0].attributes.ConsultImages
  const aboutimg = baseUrlImage+posts[0].attributes.Aboutimg.data[0].attributes.formats.small.url;
  const abouth1 = posts[0].attributes.AboutH1;
  const aboutdescp = posts[0].attributes.Aboutdescp;
  const serviceh1 =posts[0].attributes.serviceh1
  const servicepara = posts[0].attributes.servicepara
  const ProductCard = posts[0].attributes.ProductCard
  const ClinicH1 = posts[0].attributes.ClinicH1
  const ClinicPara = posts[0].attributes.ClinicPara
  const ShopH1= posts[0].attributes.ShopH1
  const ShopPara = posts[0].attributes.ShopPara
  const servicecard = posts[0].attributes.ServiceCard
  const Testimon_img = posts[0].attributes.Testimon_img.data[0].attributes.formats.small.url
  const TMsliderCard = posts[0].attributes.TMsliderCard
  const DownloadImg = posts[0].attributes.DownloadImg.data.attributes.formats.small.url
  const DownloadH1 = posts[0].attributes.DownloadH1
  console.log(DownloadImg)
  return (
    
    <>
    
     <Header />
     <MainBanner bannerh1={bannerh1} imgurl={imgurl} bannerpara={bannerpara} />
     <PartnerSection consulth1={consulth1} consult_subh2={consult_subh2} ConsultImages={ConsultImages}/>
     <AboutSection aboutimg={aboutimg} abouth1={abouth1} aboutdescp={aboutdescp}/>
     <ServicesSection serviceh1={serviceh1} servicepara={servicepara} servicecard={servicecard} />
     <DoctorArea ClinicH1={ClinicH1} ClinicPara={ClinicPara}/>
     <ShopSection ShopH1={ShopH1} ShopPara={ShopPara} ProductCard={ProductCard}/>
     <TestimonialSection Testimon_img={`${baseUrlImage}${Testimon_img}`} TMsliderCard={TMsliderCard}/>
     <DownloadAppSection DownloadImg={`${baseUrlImage}${DownloadImg}`} DownloadH1={DownloadH1}/>
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

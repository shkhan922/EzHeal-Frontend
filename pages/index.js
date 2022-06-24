
import AboutSection from '~/components/HomeComponent/AboutSection'
import DoctorArea from '~/components/HomeComponent/DoctorArea'
import DownloadAppSection from '~/components/HomeComponent/DownloadAppSection'
import MainBanner from '~/components/HomeComponent/MainBanner'
import PartnerSection from '~/components/HomeComponent/PartnerSection'
import ServicesSection from '~/components/HomeComponent/ServicesSection'
import ShopSection from '~/components/HomeComponent/ShopSection'
import TestimonialSection from '~/components/HomeComponent/TestimonialSection'
import Header from '../components/ReusableComponent/Header'


export default function Home() {
  return (
    <>
     <Header/>
     <MainBanner/>
     <PartnerSection/>
     <AboutSection/>
     <ServicesSection/>
     <DoctorArea/>
     <ShopSection/>
     <TestimonialSection/>
     <DownloadAppSection/>
    </> 
  )
}

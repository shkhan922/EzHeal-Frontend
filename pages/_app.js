
import '../assets/css/all.min.css'
import '../assets/css/animate.min.css'
import "../assets/css/bootstrap.min.css"
import '../assets/css/dark.css'
//import '../assets/css/dark.css.map'
import '../assets/css/dark.scss'
import '../assets/css/flaticon.css'
import '../assets/css/fontawesome.min.css'
import '../assets/css/magnific-popup.min.css'
import '../assets/css/meanmenu.css'
import '../assets/css/nice-select.min.css'
import '../assets/css/odometer.min.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/owl.theme.default.min.css'
import '../assets/css/responsive.css'
// import '../assets/css/responsive.css.map'
import '../assets/css/responsive.scss'
import '../assets/css/style.css'
import UserState from '~/context/UserState'
import "react-multi-carousel/lib/styles.css";
// import '../assets/css/style.css.map'
// import '../assets/css/style.scss'

import Image from 'next/image'
// javascript 
import store from '~/src/store'
import { Provider } from 'react-redux'




function MyApp({ Component, pageProps }) {

  return <>
  <Provider store={store}>
  <UserState>
  <Component {...pageProps} suppressHydrationWarning/>
  </UserState>
  </Provider>
  
  {/* <div class="dark-version">

  <a href="https://web.whatsapp.com/"><Image src="./public/static/img/whatsapp.png" alt="whatsapp" class="round" layout='fill'/></a>
</div> */}
</>
}

export default MyApp

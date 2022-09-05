import { Userprofider } from '../profiders/userprofider'
import Authwrapper from '../services/auth/authwrapper'
import '../styles/globals.css'
import { Globalprofider } from '../profiders/global'
function MyApp({ Component, pageProps,name }) {
  console.log(name)
  return <>
 

  <Globalprofider>
  <Userprofider>
  <Component {...pageProps} />
  </Userprofider>
  </Globalprofider>
  
 
  </>
}
export async function getServerSideProps(context) {
  return {
    props: {
      name:'imran'
    }, // will be passed to the page component as props
  }
}

export default MyApp

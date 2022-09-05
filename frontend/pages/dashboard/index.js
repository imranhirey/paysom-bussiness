import React, { useContext } from 'react'
import { Usercontext } from '../../profiders/userprofider'
import authenticatedRoute from '../../components/protectedroutes/protectedroutes';
import Sidebar from '../../components/dashboard/componenets/sidebar';
import Boxes from '../../components/dashboard/componenets/Home';
import Navbar from '../../components/dashboard/componenets/navbar';
import Home from '../../components/dashboard/componenets/Home';
import Layout from '../../components/dashboard/componenets/layout';

function Index(props) {
  console.log('in main js',props)
  
  return (
   <Layout>
    <Home/>
   </Layout>
  )
}

export default authenticatedRoute(Index,{

})
import React from 'react'
import Navbar from '../../components/dashboard/componenets/navbar'
import Paymentspage from '../../components/dashboard/componenets/Paymentspage'
import Sidebar from '../../components/dashboard/componenets/sidebar'
import Layout from '../../components/dashboard/componenets/layout';

function payments() {
  return (
    <Layout>
        <Paymentspage/>
    </Layout>
  )
}

export default payments
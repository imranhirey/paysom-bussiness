import React from 'react'
import Sidebar from './sidebar';
import Navbar from './navbar';

function Layout(props) {
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        
        
      }}>
        <Sidebar/>
        <div style={{
           width: '100vw',
           height: '100vh',
        }}>
        <Navbar/>
       {props.children}
        </div>
      </div>
  )
}

export default Layout
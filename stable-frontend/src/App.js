import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import Login from './pages/Login';
import Dashboard from './pages/dahboard';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Accountcontext } from './context/Acoountcontext';
import Register from './pages/Register';
// i

function App() {
  let [account,setaccount]=useContext(Accountcontext)
  let Loading=()=>{
    return (
      <h1>Loading </h1>
    )
  }
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={account==='null'?<Loading/>:account===null?<Navigate to='/login'/>:<Dashboard/>}/>          
    <Route path="/login" element={account==='null'?<Loading/>:account!=null?<Navigate to='/'/>:<Login/>}/>          
    <Route path="/register" element={account==='null'?<Loading/>:account!=null?<Navigate to='/'/>:<Register/>}/>          


       
    </Routes>
  </BrowserRouter>
  
  )
    
}

export default App;

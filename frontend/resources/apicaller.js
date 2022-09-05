import axios from "axios";
// pass headers
axios.defaults.baseURL='http://localhost:5500/';

axios.interceptors.request.use((request)=>{
  request.headers.Auth=localStorage.getItem('token')?localStorage.getItem('token'):null;
  return request;
})


export default class Apicaller {
  data={}
  

  signup = async (data) => {

    let res = await axios.post("/register", {
      data, //send user object to the server
    });
    return res;
  };
  login=async(data)=>{
    console.log('login in progress');
    let res=await axios.post("/login",{
      data
    })
    return res

  }
  sendvercode=async()=>{
    let res=await axios.post("/vercode/send",{
      data:this.data // send email
    })
    return res

  }
  updaterefrence=async(data)=>{
    console.log(data)
    let res= await axios.post('/updaterefrence',{
      data:data //send user object to the server
    })
    return res.data
  
  }
  

  verifycode=async()=>{
    let res=await axios.post("/vercode/verify",{
      data:this.data // {email:this.data.email,vercode:this.data.vercode}
    })
    return res
  }
  getaccount=async(token)=>{
    let res= await axios.post('/getacount',{token})
    return res.data
  }
}

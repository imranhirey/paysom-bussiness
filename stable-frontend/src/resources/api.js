import axios from "axios";
// pass headers
axios.defaults.baseURL='http://144.126.252.62:5500/';

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
  verifytoken=async(token)=>{
    let res=await axios.post("/tokens/verifytoken",{token})
    console.log(res);
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
  createintent=async(data,bussinessid)=>{
    let res= await axios.post('/intents/create',{data,bussinessid})
    return res.data
  }
  getintents=async(data)=>{
    console.log('in checking ',data)
    let res= await axios.post('/intents/get',{bussinessid:data})
    return res.data
  }
  registerapp=async(data,ownerid)=>{
    console.log('in checking ',data)
    let res= await axios.post('/apps/createapp',{...data,ownerid})
    return res.data
  }
  getapps=async(data)=>{
    console.log('in checking ',data)
    let res= await axios.post('/apps/getapp',{accountid:data})
    return res.data
  }
  getcustomers=async(data)=>{
    let res= await axios.post('/customers/get',{accountid:data})
    return res.data
  }
  create_subscribtion=async(data)=>{
    let res= await axios.post('/subscriptions/create',{...data})
    return res.data
  }
  get_subscribtions=async(data)=>{
    let res= await axios.post('/subscriptions/getallsub',{accountid:data})
    return res.data
  }
  substats=async(bid)=>{ // bid is bussiness  id
    let res= await axios.get('/microservices/subscribtions/'+bid)
    return res.data

  }
  intentstats=async(bid)=>{ // bid is bussiness id
    let res= await axios.get('/microservices/intents/'+bid)
    return res.data

  }
}

import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Progress,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Apicaller from "../resources/api";
import getUserGeolocationDetails from "../resources/getlocation";
import { placeholder, type } from "../resources/inputhelpers";

function Register(props) {
    let [bussinessinfo,setbussinessinfo]=useState({
        
        businessname:'',
         businessaddress:'',
         business_registration_number:'',
         businessphone:'',
         businessemail:'',
         businesswebsite:'',
         businessdescription:'',
         business_owner_name:'',
         password:'',
         confirm_password:''
         
       })
       let inputs=Object.keys(bussinessinfo)
       console.log(inputs)


  let [status, setstatus] = useState({
    loading: false,
    success: false,
    error: false,
    text: "",
  });
  
  let [loading, setloading] = useState(false);
  console.log(bussinessinfo);
  let handleChange = (e) => {
    setstatus({
      loading: false,
      success: false,
      error: false,
      text: "",
    });
    console.log(bussinessinfo);
    setbussinessinfo({
      ...bussinessinfo,
      [e.target.name]: e.target.value,
    });
    console.log(bussinessinfo);
  };
  let handlesubmit = async () => {
    if (bussinessinfo.businessname === "" || bussinessinfo.businessaddress === "" || bussinessinfo.business_registration_number === "" || bussinessinfo.businessphone === "" || bussinessinfo.businessemail === "" || bussinessinfo.businesswebsite === "" || bussinessinfo.businessdescription === "" || bussinessinfo.business_owner_name === "" || bussinessinfo.password === "" || bussinessinfo.confirm_password === "") {
      setstatus({
        loading: false,
        success: false,
        error: true,
        text: "Please fill all the fields",
      });
    } else {
      setstatus({
        loading: true,
        success: false,
        error: false,
        text: "",
      });
      let userlocation = await getUserGeolocationDetails();
      console.log(userlocation);
      let api = new Apicaller();
      let data = {
        ...bussinessinfo,
        userlocation,
      };
      let res= await axios.post("/register", data);
        console.log(res);
      
      
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
        flexDirection: "column",
      }}
    >
          <img style={{
            position: "absolute",
            top: "-40px",
            left: "7%",
       
           
          }} width={200} height={200} src="/images/logo.png" />
      <div
        style={{
          width: "900px",
          height: "100%",
          borderRadius: "10px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <FormControl
          isDisabled={status.loading}
          onChange={handleChange}
          color="black"
          width={650}
          borderColor="dodgerblue"
        >
        
          {status.loading ? <Progress size="xs" isIndeterminate /> : null}
          {status.error ? (
            <Alert margin={3} size="xs" status="error">
              <AlertIcon />
              {status.text}
            </Alert>
          ) : null}
          {status.success ? (
            <Alert margin={3} size="xs" status="success">
              <AlertIcon />
              {status.text}
            </Alert>
          ) : null}
         
         {inputs.map(input=>(
            <>
             <Input
            name={input}
            isRequired
            margin={3}
            placeholder={placeholder(input)}
            type={type(input)}
          /></>
         ))}
          <Link margin={3}>Forgot your password? </Link>
          <Button
            isDisabled={status.loading}
            onClick={handlesubmit}
            type="submit"
            color="white"
            borderEndRadius="6px"
            backgroundColor="dodgerblue"
            isFullWidth
            margin={3}
            variantColor="grey"
            variant="outline"
          >
            Register
          </Button>
        </FormControl>

        <Link>
          Already have an account? <Button variant="link"> Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Register;

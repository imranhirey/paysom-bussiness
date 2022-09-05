import { ArrowUpIcon } from "@chakra-ui/icons";
import ReCAPTCHA from "react-google-recaptcha";
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
import React, { useState } from "react";
import Apicaller from "../resources/api"; //
import getUserGeolocationDetails from "../resources/getlocation";
import { useNavigate, useRoutes } from "react-router-dom";
// 
function Login(props) {
  let navigate=useNavigate()
  let [logininfo, setlogininfo] = useState({
    email: "",
    password: "",
  });
  let [status, setstatus] = useState({
    loading: false,
    success: false,
    error: false,
    text: "",
  });
  let [loading, setloading] = useState(false);
  console.log(logininfo);
  let handleChange = (e) => {
    setstatus({
      loading: false,
      success: false,
      error: false,
      text: "",
    });
    console.log(logininfo);
    setlogininfo({
      ...logininfo,
      [e.target.name]: e.target.value,
    });
    console.log(logininfo);
  };

  let handlesubmit = async () => {

    if (logininfo.email === "" || logininfo.password === "") {
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
        logininfo,
        userlocation,
      };
      let res = await api.login(data);
      console.log(res.data.token);
      setloading(false);
      if (res?.data?.msg != "login successful") {
        setstatus({
          loading: false,
          success: false,
          error: true,
          text: "Invalid credentials please try again",
        });
      } else {
        localStorage.setItem("token", res.data.token);
        setstatus({
          loading: false,
          success: true,
          error: false,
          text: "Login successful please wait while we redirect you to your dashboard",
        });
        setTimeout(() => {
          window.location.reload()

          
        }, 900);
      }
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
      }}
    >
      <div
        style={{
          width: "700px",
          height: "600px",
          backgroundColor: "#fff",
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
          width={450}
          borderColor="dodgerblue"
        >
          <Center>
            {" "}
            <img width={200} height={200} src="/images/logo.png" />
          </Center>
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
          <Input
            name="email"
            isRequired
            margin={3}
            placeholder="Enter Bussiness Email"
          />
          <Input
            name="password"
            isRequired
            margin={3}
            placeholder="Enter Bussiness Password"
          />
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
            Login
          </Button>
        </FormControl>

        <Link>
          Don't have an account? <Button variant="link"> Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

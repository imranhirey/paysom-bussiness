import axios from "axios";

const getUserGeolocationDetails = async() => {
  let res=await fetch("https://geolocation-db.com/json/86f5f280-f4eb-11ec-8676-4f4388bc6daa")
let data=await res.json()
 return data  

       
};

export default getUserGeolocationDetails;

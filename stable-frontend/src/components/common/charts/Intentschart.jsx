import React, { useEffect } from 'react';

import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Accountcontext } from '../../../context/Acoountcontext';
import Apicaller from '../../../resources/api';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



export function Intentschart() {
  // function to detect date it is month
  let detectmonthname = (date) => {
    let month = new Date(date).getMonth();
    switch (month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
    }
 
  }
  let [intents, setIntents] = React.useState([]);
  let [intentlabels, setIntentlabels] = React.useState([]);


   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Your Monthly Income',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'from your current account',
        data: intents?.paidintents?.map((x) =>x.ammount ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  ////////////////////////
  let [account, setAccount] = React.useContext(Accountcontext);
  useEffect(()=>{
  let getintents=async()=>{
    let api= new Apicaller()
    let res=await api.intentstats(account.businessid)
    res && setIntents(res)
    
  }
  getintents()

  },[])
  console.log('from the carts ',intents);
console.log(intents.paidintents?detectmonthname(intents.paidintents[0].created_at):'no data');
  //////////////////////////////////////////////

  

  return <Line options={options} data={data} />;
}

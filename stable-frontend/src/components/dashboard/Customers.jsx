import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { TableContainer, TableHead } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Accountcontext } from '../../context/Acoountcontext';
import { Pincontext } from '../../context/pincontext';
import Apicaller from '../../resources/api';
import Pinrequired from '../security/Pinrequired';

const Customers = () => {
    let [account,setaccount]=useContext(Accountcontext)
    let [customers, setcustomers] = React.useState([]);
    let [pinrequired,setpinrequired]=React.useContext(Pincontext)
    useEffect(()=>{
        setpinrequired(true)
        let getcustomers=async()=>{
            let api=new Apicaller()
            let res= await api.getcustomers(account.businessid)
            setcustomers(res.customers)
             
        }
        getcustomers()
    },[])
    return (
        <div style={{
            width: '60%',
            height: '90%',
            marginTop:'7px'

        }}>
            <TableContainer>
                <Table>
                <TableCaption>*Customers are users who paid an intent you generated from your account or your dev apps and the users who paid directly through your account</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Customers id</Th>
                        <Th>Customer Name</Th>
                        <Th>Customer Email</Th>
                        <Th>Intents Paid</Th>
                        <Th style={{
                            fontWeight:'bold',
                            color:'dodgerblued'
                        }}>Status</Th>
                    </Tr>

                </Thead>
                <Tbody>
                  {customers.map(cus=>(
                    <>
                      <Tr>
                        <Td>{cus.cus_id}</Td>
                        <Td>{cus.name}</Td>
                        <Td>{cus.email}</Td>
                        <Td>unknown</Td>
                        <Td>{cus.status?cus.status:'Active'}</Td>
                    </Tr></>
                  ))}
                </Tbody>

                </Table>
            </TableContainer>
            <Pinrequired/>
        </div>
    );
};

export default Customers;
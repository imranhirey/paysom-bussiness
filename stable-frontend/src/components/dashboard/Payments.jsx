import { Button, Divider, Heading, Link, Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { TableContainer } from '@mui/material';
import React from 'react';
import {Refund} from 'react-icons/fa'

const Payments = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
                           <Heading size='sm'>Payments Towards Your Account</Heading>

            <Divider margin={4}/>
            <div style={{
                width: '60%',
                height: '95%',
                display: 'flex',
                flexDirection: 'column',
            }}>
            <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr fontWeight='bold'>
        <Th>Transaction id</Th>
        <Th>Customer</Th>
        <Th isNumeric>Via</Th>
        <Th >Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Trx762gh2767622</Td>
        <Td>imran@gmail.com</Td>
        <Td isNumeric>qr</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>Trx762gh656622</Td>
        <Td>mumin@gmail.com</Td>
        <Td isNumeric>dm</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
            </div>
           
        </div>
    );
};

export default Payments;
import { Box, Divider, Heading, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';
import { Accountcontext } from '../../context/Acoountcontext';
import { Intentschart } from '../common/charts/Intentschart';
import Intents from './Intents';

const Home = () => {
  let [account, setAccount] = React.useContext(Accountcontext);
  console.log(account);
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box width={1200} margin={4} display='flex' flexDirection='column' padding={4}    height={300}>
                <Heading size='md'>{account?.businessname} </Heading>
                <Divider margin={6}/>
                <StatGroup>
  <Stat>
    <StatLabel>Toady's Income</StatLabel>
    <StatNumber>$967.60</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Unpaid Intents</StatLabel>
    <StatNumber>55</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      34.55%
    </StatHelpText>
  </Stat>
  <Stat>
    <StatLabel>Paid Intents</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
  <Stat>
    <StatLabel>New Customers Toay</StatLabel>
    <StatNumber>130</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      200%
    </StatHelpText>
    
  </Stat>
  <Stat>
    <StatLabel>New Subscriptions</StatLabel>
    <StatNumber>12</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      77%
    </StatHelpText>
    
  </Stat>
  <Stat>
    <StatLabel>Cancelled Subscriptions</StatLabel>
    <StatNumber>9</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      12%
    </StatHelpText>
    
  </Stat>
</StatGroup>

            </Box>
            <Box width={500} margin={4} height={500}>
              <Intentschart/>

</Box>
            
        </div>
    );
};

export default Home;
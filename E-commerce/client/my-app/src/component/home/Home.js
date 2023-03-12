import { Box } from '@mui/system'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { styled} from '@mui/system';
import Card from '../header/Card';
import { Button } from '@mui/material';
import AddUser from '../login/AddUser';
import Cart from '../cart/Cart';
//import Login from '../login/Login';
//import { Box } from '@mui/material'
const Component = styled(Box)`
padding:20px 10px;
background:#F2F2F2;
`
const Home = () => {
  return (
    <>

      <Navbar/>

      <Component>
      <Banner/>
      </Component>
      
      <Card/>
      <Cart/>
    <AddUser/>
     
    </>
  )
}

export default Home

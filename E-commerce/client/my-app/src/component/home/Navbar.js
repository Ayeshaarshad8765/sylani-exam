import { Box,Button,styled, Typography } from '@mui/material'
import React from 'react'
import {navData} from '../../constant/data';
//import Header2 from '../header/Header2';

const Component = styled(Box)
`
display:flex;
margin:55px 130px 0 55px;
justify-content:space-between;
`
const Container = styled(Box)`
padding:12px 8px;
text-align: center;
`
const Text = styled(Typography)`
font-size:18px;
font-weight:600;
font-family:inherit;
`
const Navbar = () => {
  
  return (
    <Component>
      {
        navData.map(data=>{
            return(
                <Container key={data.img}>
            <img src={data.url} alt='nav'/>
            <Text>{data.text}</Text>
            </Container>
            )
           
        })
      }
     
    </Component>
  )
}

export default Navbar

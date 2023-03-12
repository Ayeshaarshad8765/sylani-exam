import React from 'react'
//import {NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import {styled,Box,Typography, Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Search from './Search';
import CostumButton from './CostumButton';
import Logo from '../../image/Logo.png'
import Setting from './Setting';
import {Link} from "react-router-dom"

const StyledHeader = styled(AppBar)`
background: #27874f0;
height:65px;
`;
const Component = styled(Box)`
margin-left: 12%
`;

const CustumWrapper = styled(Box)
`
margin:0 5% 0 auto;
margin-left: 6%
`
const Header = () => {
  //const logoUrl ='https://images.yourstory.com/cs/2/220356402d6d11e9aa979329348d4c3e/Flipkart-1582211499554.jpg?w=752&fm=auto&ar=2:1&mode=crop&crop=faces'
  //const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHLSiU8yMtpy4AY-oHKABzFlgs_GlgB1w0A&usqp=CAU'
  //const navigate = useNavigate();
  return (
    <>
        <StyledHeader>
          <Toolbar style={{minHeight:65}}>
          <Component>
          <img src={Logo} alt='logo' style={{width:60}}/>
          </Component>
          <Search/>
          <CustumWrapper>
            <CostumButton/>
          </CustumWrapper>
          </Toolbar>
        </StyledHeader>
    </>
  )
}

export default Header

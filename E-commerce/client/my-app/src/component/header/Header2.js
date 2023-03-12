import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar,styled, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
const Component = styled(AppBar)`
background:#FB641B;
color:white;

`

const Container = styled(Toolbar)`
display: flex;
justify-content: space-between;
& > link{
    padding:20px;
}


`
const Header2 = () => {
  return (
    <>
         <Component>
     <Container>
        <Link to='/'>HOME</Link>
        <Link to ='/about'>ABOUT</Link>
        <Link to ='/contact'>CONTACT</Link>
        <Link to ='/login'>LOGOUT</Link>
        
     </Container>
    </Component> 
    </>
  )
}

export default Header2

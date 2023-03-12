import { Box, Typography,styled } from '@mui/material'
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//component
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
& > button, & > p, & > div{
    margin-right:40px;
    font-size:14px;
    align-items:centre
} 

`
const Container = styled(Box)
`
display:flex
`
const LoginButton = styled(Button)
`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px
`
const CostumButton = () => {
  const [open,setOpen] = useState(false);

  const openDialog = ()=>{
    setOpen(true);
  }
  return (
    <Wrapper>
    {/*   <LoginButton variant="contained" onClick={openDialog}>Login</LoginButton>*/}
    <LoginButton variant="contained" >SignIn</LoginButton>
      <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
      <Typography style={{marginTop:3}}>More</Typography>

      <Container>
      <ShoppingCartIcon/>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CostumButton

import React from 'react'
import Dialog from '@mui/material/Dialog';
//import DialogTitle from '@mui/material/DialogTitle';
import { Box, TextField, Button, Typography,styled } from '@mui/material';
//import { maxWidth } from '@mui/system';

const Component = styled(Box)`
height:70vh;
width:90vh;
`
const Image = styled(Box)`
background:#2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') centre no-repeat;
height:100%;
width:40%;
padding:45px 35px;
& > p, & > h5{
    color: white,
    font-weight:600;
}
`

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
paddin: 25px 35px;
flex:1;
& > div, & > button, {
    margin-top:20px;
}
`
const LoginButton = styled(Button)`
text-tranform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;
`

const RequestButton = styled(Button)`
text-tranform:none;
background:#fff;
color:#FB641B;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0 20%)
`

const Text = styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAccount = styled(Typography)`
font-size:14px;
text-align:centre;
color:#2874f0;
font-weight:600;
cursor:pointer;
`
    

const LoginDialog = ({open,setOpen}) => {

    const handleClose =()=>{
        setOpen(false) 
    }

  return (
   
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: {maxWidth:'unset'}}}>

      <Component>
      <Box style={{display:'flex',height:100}}>
      <Image>
        <Typography variant='h5'>Login</Typography>
        <Typography style={{marginTop:20}}>Get access to your Orders.WishList and Recommendation</Typography>
      </Image>
        <Wrapper>
        <TextField variant='Standard' label='Enter Email/Mobile number'/>
        <TextField variant='Standard' label='Enter Password'/>
        <Text>By contining you agree to flipkart's terms of of use and Privacy Policy</Text>
        <LoginButton>Login</LoginButton>
        <Button style={{textAlign:'center'}}>OR</Button>
        <RequestButton>Request OTP</RequestButton>
        <CreateAccount>New to flipkart? Create an account</CreateAccount>
        </Wrapper>
      </Box>
       
      </Component>
      </Dialog>
   
  )
}

export default LoginDialog

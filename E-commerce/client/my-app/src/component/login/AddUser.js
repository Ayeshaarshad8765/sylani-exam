import React,{useState} from 'react'
import {FormControl,FormGroup, Input, InputLabel, Typography,styled, Button} from '@mui/material';
//import { App } from "../service/api";
const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div{
    margin-top:20px
}
`

const defalutUser ={
    name:"",username:"",email:"",phone:""
}

const AddUser = () => {
    const [user,setUser]=useState({defalutUser})
    const onvaluechange =(e)=>{
        console.log(user);
        setUser({...user,[e.target.name]:e.target.value})
    }

    // const addUserDetail =async()=>{
    //    await addUser(user)
    // }
  return (
    <>
     <Container>
     <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> onvaluechange(e)} name='name'/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=> onvaluechange(e)} name='username'/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onvaluechange(e)} name='email'/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=> onvaluechange(e)} name='phone'/>
        </FormControl>
        <FormControl>
            <Button variant='contained' >Add User</Button>
        </FormControl>
     </Container>
    </>
  )
}

export default AddUser
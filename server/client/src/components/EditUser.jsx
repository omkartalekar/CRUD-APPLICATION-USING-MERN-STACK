import React, {useState,useEffect} from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";


import {editUser, getUser} from "../service/api"

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
    name:"",
    username:"",
    email:"",
    phone:""
}

const EditUser = () => {

    const [user,setUser]=useState(defaultValue);
    const {id}=useParams();

    const navigate=useNavigate();



    const onValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
       };

       const EditUserDetails = async()=>{
         await editUser(user,id);
         navigate("/All");

       }

       useEffect(()=>{

        loadUserDetails();

       },[]);

       const loadUserDetails=async()=>{
           const response=await getUser(id);
           setUser(response.data);
       } 

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }} name="name" value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="username" value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="email" value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => {
            onValueChange(e);
          }}
          name="phone" value={user.phone}
        />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={()=>{EditUserDetails()}}>Edit User</Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
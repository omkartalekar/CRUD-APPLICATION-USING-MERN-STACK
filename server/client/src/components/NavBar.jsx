import React from 'react';
import {AppBar,Toolbar,styled, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';




const Header=styled(AppBar)`
background:#111111;
margin-bottom:20px;
`
const Tabs=styled(NavLink)`
font-size:20px;
margin-right:20px;
text-decoration:none;
color:inherit;
`

const NavBar = () => {
  return (
     <Header position='static'>
        <Toolbar>
            <Tabs to="/">Code for Interview</Tabs>
            <Tabs to="/All">All Users</Tabs>
            <Tabs to="/Add">Add Users</Tabs>
        </Toolbar>
     </Header>
  );
}

export default NavBar;

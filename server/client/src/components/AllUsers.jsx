import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  styled,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../service/api.js";

const StyledTable = styled(Table)`
  width: 90%;
  margin:auto auto;
`;
const THead = styled(TableRow)`

background: #000000;
// text-align:center;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
&>td{
  font-size:16px;
}
`;
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <div>
      <StyledTable>
        <TableHead >
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </THead>
        </TableHead>
        <TableBody>

          {
          users.map(user => (
            <TBody>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/Edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserDetails(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default AllUsers;

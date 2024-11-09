import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const columns = [
  { field: 'email', headerName: 'Email ID', width: 200 },
  { field: 'password', headerName: 'Password', width: 150 },
  { field: 'signupTime', headerName: 'Signup Time', width: 200 },
  { field: 'ip', headerName: 'IP', width: 150 },
];

const rows = [
  { id: 1, email: 'kamal@example.com', password: '******', signupTime: '2023-11-01', ip: '192.168.0.1' },
  // Add more users as needed
];

function Users() {
  return (
    <Box mt={3} mb={3} style={{ height: 400, width: '100%' }}>
      <Typography variant="h6" color="primary" gutterBottom>
        Users
      </Typography>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Box>
  );
}

export default Users;

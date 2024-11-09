import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'title', headerName: 'Task Title', width: 200 },
  { field: 'description', headerName: 'Task Description', width: 250 },
  { field: 'taskList', headerName: 'Task List Title', width: 200 },
  { field: 'createdBy', headerName: 'Created By (Email ID)', width: 200 },
  { field: 'creationTime', headerName: 'Creation Time', width: 200 },
];

const rows = [
  { id: 1, title: 'Design UI', description: 'Create UI for login', taskList: 'Project Alpha', createdBy: 'user1@example.com', creationTime: '2023-11-01' },
  // Add more tasks as needed
];

function Tasks() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Tasks</h3>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Tasks;

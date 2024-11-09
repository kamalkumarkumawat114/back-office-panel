import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'title', headerName: 'Task List Title', width: 200 },
  { field: 'createdBy', headerName: 'Created By (Email ID)', width: 200 },
  { field: 'taskCount', headerName: 'No of Tasks', type: 'number', width: 150 },
  { field: 'creationTime', headerName: 'Creation Time', width: 200 },
  { field: 'lastUpdated', headerName: 'Last Updated', width: 200 },
];

const rows = [
  { id: 1, title: 'Project Alpha', createdBy: 'user1@example.com', taskCount: 5, creationTime: '2023-11-01', lastUpdated: '2023-11-05' },
  // Add more task lists as needed
];

function TaskLists() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Task Lists</h3>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default TaskLists;

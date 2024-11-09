import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Users from './Users';
import TaskLists from './TaskLists';
import Tasks from './Tasks';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Users');

  return (
    <Container>
      <Typography variant="h4" color="primary" gutterBottom>
        Dashboard
      </Typography>
      <Box display="flex" gap={2} mb={3}>
        <Button
          variant={activeTab === 'Users' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveTab('Users')}
        >
          Users
        </Button>
        <Button
          variant={activeTab === 'TaskLists' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveTab('TaskLists')}
        >
          Task Lists
        </Button>
        <Button
          variant={activeTab === 'Tasks' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setActiveTab('Tasks')}
        >
          Tasks
        </Button>
      </Box>
      <Box>
        {activeTab === 'Users' && <Users />}
        {activeTab === 'TaskLists' && <TaskLists />}
        {activeTab === 'Tasks' && <Tasks />}
      </Box>
    </Container>
  );
}

export default Dashboard;

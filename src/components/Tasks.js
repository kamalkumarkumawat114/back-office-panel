import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import your Firebase configuration

const columns = [
  { field: "title", headerName: "Task Title", width: 200 },
  { field: "description", headerName: "Task Description", width: 250 },
  { field: "taskList", headerName: "Task List Title", width: 200 },
  { field: "createdBy", headerName: "Created By (Email ID)", width: 200 },
  { field: "creationTime", headerName: "Creation Time", width: 200 },
];

function Tasks() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasksData = querySnapshot.docs.map((doc, index) => {
          const data = doc.data();
          
          return {
            id: doc.id, 
            title: data.title || "Untitled",
            description: data.description || "No description", 
            taskList: data.title || "Unknown List", 
            createdBy: data.createdBy || "Unknown", 
            creationTime: data.creationTime?.toDate().toLocaleString() || "N/A", 
          };
        });
        setRows(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h3>Tasks</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} loading={loading} />
    </div>
  );
}

export default Tasks;

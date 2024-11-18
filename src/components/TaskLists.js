import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path to your Firebase config file

function TaskLists() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "taskLists"));
        const taskListsData = querySnapshot.docs.map((doc, index) => {
          const data = doc.data();
          return {
            id: doc.id, 
            title: data.title || "Untitled",
            createdBy: data.createdBy || "Unknown",
            // tasks: Array.isArray(data.tasks) ? data.tasks : [], 
            creationTime: data.creationTime?.toDate().toLocaleString() || "N/A",
            lastUpdated: data.lastUpdated?.toDate().toLocaleString() || "N/A",
          };
        });
        setRows(taskListsData);
      } catch (error) {
        console.error("Error fetching task lists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "title", headerName: "Task List Title", width: 200 },
    { field: "createdBy", headerName: "Created By (Email)", width: 200 },
    // {
    //   field: "tasks",
    //   headerName: "No. of Tasks",
    //   width: 150,
    //   valueGetter: (params) => (params.row.tasks ? params.row.tasks.length : 0), // Safely handle undefined tasks
    // },
    { field: "creationTime", headerName: "Creation Time", width: 200 },
    { field: "lastUpdated", headerName: "Last Updated", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} loading={loading} />
    </div>
  );
}

export default TaskLists;

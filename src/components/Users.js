import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../firebaseConfig"; 

const Users = () => {
  const [rows, setRows] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Fetch data from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users")); 
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id, 
          ...doc.data(),
          
        }));
        setRows(usersData); 
      } catch (error) {
        console.error("Error fetching users from Firestore:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchUsers();
  }, []);

  // Define DataGrid columns
  const columns = [
    { field: "email", headerName: "Email ID", width: 200 },
    { field: "password", headerName: "Password", width: 150 },
    { field: "signupTime", headerName: "Signup Time", width: 200 },
    { field: "ip", headerName: "IP Address", width: 200 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h2>Users</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        loading={loading}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Users;

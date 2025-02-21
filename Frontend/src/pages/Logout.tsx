import React from "react";
import axios from "axios";

export function Logout() {
  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      
      localStorage.removeItem("authToken");
      console.log("Logout successful");
     
      window.location.href = "/login"; 
    } catch (error) {
      console.log("Error logging out", error);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-info">
      Logout
    </button>
  );
}

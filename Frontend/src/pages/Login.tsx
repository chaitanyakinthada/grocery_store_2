import React, { useState } from "react";
import axios from "axios";

export function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("/auth/login", {
        username: email,  
        password: password,
      });

      if (response.status === 200) {
        
        console.log("Login successful");
        
      }
    } catch (error: any) {
      
      if (error.response) {
        setError(error.response.data.message); 
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };


  return (
    <div className="auth-container">
        <h2 className="text-center">Login</h2>
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <div className="jumbotron"> 
                    <form role="form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="Email"
                                 className="form-control input-sm" 
                                 placeholder="Email Address"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 />
                            <span className="text-danger"></span>
                        </div>
                        <div className="form-group">
                         <label>Password</label>
                          <input 
                            type="password" 
                            name="Password" 
                            className="form-control input-sm" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                           <span className="text-danger"></span>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div style={{marginTop: "5px"}}>
                            <input type="submit" value="Login" className="btn btn-info btn-block" style={{margin:"5px"}}/>
                            <a href="./signup" className="btn btn-info btn-block">Register</a>
                        </div>
                    </form>
        </div>
    </div>

</div>

    </div>
  );
};



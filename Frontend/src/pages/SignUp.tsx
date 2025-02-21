import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
export function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("/auth/signup", {
        username: username, 
        password: password,
        email: email,
        mobile: mobile, 
      });

      if (response.status === 201) {
       
        console.log("Signup successful");
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
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label >User Name</label>
                    <input 
                    type="text" 
                    name="Name" 
                    className="form-control input-sm" 
                    placeholder="Name"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <span  className="text-danger"></span>
                </div>
                <div className="form-group">
                    <label >Mobile</label>
                    <input 
                    type="text" 
                    name="Mobile" 
                    className="form-control input-sm" 
                    placeholder="Mobile"
                    onChange={(e) => setMobile(e.target.value)}/>
                    <span className="text-danger"></span>
                </div>
               
                <div className="form-group">
                    <label >Email</label>
                    <input 
                    type="email" 
                    name="Email" 
                    className="form-control input-sm" 
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}/>
                    
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input 
                    type="password" 
                    className="form-control input-sm" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}/>
                    <span className="text-danger"></span>
                </div>
                {/* <div className="form-group">
                    <label >Confirm Password</label>
                    <input type="password" name="ConfirmPassword" className="form-control input-sm" placeholder="Confirm Password"/>
                    <span className="text-danger"></span>
                </div> */}

                <input type="submit" value="Register" className="btn btn-info btn-block" style={{marginTop:"10px"}}/>
                <a href="./" className="btn btn-info btn-block" style={{ marginTop: "10px", marginLeft: "5px" }}>Back to Home</a>
            </form>
        </div>
    </div>

</div>

</div>
)

}
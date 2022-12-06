import "../App.css"
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [user, setuser] = React.useState("");
  const [password, setPassword] = React.useState("");
  let navigate = useNavigate();
  
  let action=async(e)=> {
    e.preventDefault();
    const SignInCustomer = {
      userName: user,
      password: password,
    };
    console.log(SignInCustomer);
    let responce=await axios.post("http://localhost:3001/users/userSignIn", SignInCustomer);
    console.log(responce);
    if (responce.data[0].userName === SignInCustomer.userName) {
      if (responce.data[0].password === SignInCustomer.password) {
          alert("Logged in")
          navigate("/customersearch");
      }
      else{
        alert("Wrong data")
      }
    }
    else{
        alert("wrong")
      }
  }

  return (
    <div className="Admin-SignIn">
      <form className="SignInForm" onSubmit={action}>
        <h2 className="Sign_In">Sign In</h2>
        
        <br></br>
        <input
          type="name"
          placeholder="Enter user name"
          value={user}
          onChange={(e) => setuser(e.target.value)}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <input type="submit" className="User-submitButton" ></input>
      </form>
    </div>
  );
}

export default SignIn;

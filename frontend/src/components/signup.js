import axios from "axios";
import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let navigate = useNavigate();
  const [Fname, setFName] = React.useState("");
  const [Lname, setLName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [num, setNum] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const fullName= Fname+" "+Lname

  const UserSignUp = {
    name: fullName,
    username:userName,
    email: email,
    password: password,
    phoneNum: num,
    address: address,
  };

  function getDetails(e) {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      axios.post("http://localhost:3001/users/userSignUp", UserSignUp).then(
        (res) => {
          console.log(res);
          navigate("/");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  return (
    <div className="Customer-SignUp" data-testid="signup-customer">
      <form className="Customer-SignUp" onSubmit={getDetails}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Enter First name"
          value={Fname}
          onChange={(e) => setFName(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter Last name"
          value={Lname}
          onChange={(e) => setLName(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <br></br>
        <input
          type="tel"
          placeholder="Enter phone num"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        ></input>
        <br></br>
        <input
          type="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <br></br>
        <div className="Customer-SignUpButton">
          <input type="submit" className="User-submitButton"></input>
        </div>
      </form>
    </div>
  );
};
export default SignUp;

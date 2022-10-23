import axios from "axios";
import React from "react";
import "./App.css";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [num, setNum] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const UserSignUp = {
    name: name,
    email: email,
    password: password,
    phoneNum: num,
    address: address,
  };

  function getDetails() {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      axios.post("http://localhost:3001/users/userSignUp", UserSignUp).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  return (
    <div className="Customer-SignUp">
      <form className="Customer-SignUp" onSubmit={getDetails}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

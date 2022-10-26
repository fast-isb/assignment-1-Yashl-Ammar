import "../App.css"
import React from "react";
import axios from "axios";

function SignIn() {
  const [user, setuser] = React.useState("");
  const [password, setPassword] = React.useState("");

  function action(e) {
    e.preventDefault();

    const SignInCustomer = {
      userName: user,
      password: password,
    };
    console.log(SignInCustomer);
    axios.post("http://localhost:3001/users/userSignIn", SignInCustomer).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div className="Admin-SignIn">
      <form className="SignInForm" onSubmit={action}>
        <h2>Sign In</h2>
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
        <input type="submit" className="User-submitButton"></input>
      </form>
    </div>
  );
}

export default SignIn;

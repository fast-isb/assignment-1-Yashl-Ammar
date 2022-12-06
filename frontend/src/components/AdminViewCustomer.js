import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBarLogin&SignUp.js";
import "./styles/AdminViewCustomer.css";

const CustomerFeildViewTile = (props) => {
  return (
    <tr>
      <td>{props.field}</td>
      <td>{props.value}</td>
      <td>
        <button className="adminview-customer-data-display-modify-button">
          {" "}
          Modify{" "}
        </button>{" "}
      </td>
    </tr>
  );
};

const AdminViewcustomer = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let username = { username: location.state.username };

  const [customer, setcustomer] = useState({
    Address: "",
    email: "",
    name: "",
    password: "",
    phoneNum: "",
    username: "",
    banned: "",
  });

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.post(
        "http://localhost:3001/customer/getcustomer",
        username
      );

      setcustomer(response.data[0]);
    };
    fetchData();
  }, []);

  let checkBanned = () => {
    if (customer.banned === false) {
      return "Ban";
    }
    return "UnBan";
  };

  let banStringConversion = () => {
    if (customer.banned === true) {
      return "Banned";
    }
    return "Not Banned";
  };

  let deletecustomer = () => {
    let requestObejct = { username: customer.username };

    axios
      .post("http://localhost:3001/customer/delete", requestObejct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // needs to be updated
    navigate("/adminsearchcustomer");
  };

  let bancustomer = () => {
    let updatedBan = !customer.banned;
    let requestObejct = { username: customer.username, banned: updatedBan };

    console.log(updatedBan);

    axios
      .post("http://localhost:3001/customer/ban", requestObejct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // needs to be updated
    navigate("/adminsearchcustomer");
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="adminview-customer-data-display">
        <h1 className="adminview-customer-data-display-title">
          {customer.name}
        </h1>
        <hr className="adminview-customer-data-display-title-hr" />
        <button
          className="adminview-customer-data-display-button"
          onClick={deletecustomer}
        >
          {" "}
          Delete{" "}
        </button>
        <button
          className="adminview-customer-data-display-button"
          onClick={bancustomer}
        >
          {" "}
          {checkBanned()}{" "}
        </button>

        <div className="adminview-customer-data-display-table">
          <br />
          <table>
            <thead>
              <tr>
                <th className="adminview-customer-data-display-table-th1">
                  Field
                </th>
                <th className="adminview-customer-data-display-table-th1">
                  Value
                </th>
                <th className="adminview-customer-data-display-table-th2">
                  Modify
                </th>
              </tr>
            </thead>
            <tbody>
              <CustomerFeildViewTile
                field="Username"
                value={customer.username}
              />
              <CustomerFeildViewTile field="Fullname" value={customer.name} />
              <CustomerFeildViewTile field="Email" value={customer.email} />
              <CustomerFeildViewTile
                field="Phone Number"
                value={customer.phoneNum}
              />
              <CustomerFeildViewTile
                field="banned"
                value={banStringConversion()}
              />
              <CustomerFeildViewTile field="Address" value={customer.Address} />
              <CustomerFeildViewTile
                field="Phone Number"
                value={customer.phoneNum}
              />
              <CustomerFeildViewTile
                field="Password"
                value={customer.password}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewcustomer;

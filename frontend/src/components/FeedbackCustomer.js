import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import * as bd from "react-basic-design";
//const bd = require('react-basic-design');
import "../components/styles/style.scss";
import "../components/styles/FeedBack.css"
import axios from "axios";

export default function FeedbackCustomer() {
  const [rtl, setRTL] = useState(bd.helper.getRTL());
  const [darkMode, setDarkMode] = useState(bd.helper.isDarkMode());
  const [email,setEmail]=React.useState("");
  const [service,setservice]=React.useState("");
  const [name,setname]=React.useState("");
  const [message,setMessage]=React.useState("");

  function changeRTL(value) {
    setRTL(value);
    bd.helper.setRTL(value);
  }

  function changeDarMode(value) {
    setDarkMode(value);
    bd.helper.setTheme(value ? "mui-dark" : "mui-light");
  }
 
  const userFeedBack = {
    username:name,
    email: email,
    service: service,
    message: message
  };

  function Action(){
      alert("Submitting")
      axios.post("http://localhost:3001/users/userfeedback", userFeedBack).then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    
  }

  return (
    <div data-testid="Feedback-Customer">
      <bd.Paper className="p-3 my-3 mx-auto" style={{ maxWidth: 600 }}>
        <Form autoComplete="off" className="">
          <div className="text-primary text-center mb-4">
            
            <h3 className="mt-3">Customer Feedback Form</h3>
            
          </div>

          <FloatingLabel label="Email" className="dense has-icon mb-3">
            <Form.Control
              name="email"
              type="email"
              placeholder="yourName@gmail.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />  
          </FloatingLabel>
          

          <Row>
            <Col md>
              <FloatingLabel label="Full Name" className="dense mb-3">
                <Form.Control
                  name="fullName"
                  type="text"
                  placeholder="FullName"
                  autoComplete="off"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <FloatingLabel label="Service Used" className="dense mb-3">
            <Form.Control
              as="textarea"
              name="Service Used"
              placeholder="Service Used"
              style={{ height: 100 }}
              value={service}
              onChange={(e)=>setservice(e.target.value)}
            />
          </FloatingLabel>

          
          </Row>
         

          <FloatingLabel label="Message" className="dense mb-3">
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Message"
              style={{ height: 100 }}
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
          </FloatingLabel>

          {/* <bd.Button
            color="primary"
            size="lg"
            type="button"
            className="d-block m-auto w-100"
            onClick={Action}
          >
            SEND MESSAGE
          </bd.Button> */}
          <button className="Submit-Button" onClick={Action}>Submit</button>
        </Form>
      </bd.Paper>
    </div>
  );
}

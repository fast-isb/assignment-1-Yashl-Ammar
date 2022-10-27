import express from "express";
import Customer from "../models/customer.model.js";
// const express = require('express');
const customerrouter = express.Router();


customerrouter.get("/add", (req, res) => {
  
  res.send(users);
});

customerrouter.post("/", (req, res) => {
  const user = req.body;
  console.log(req.body);
  res.send(`added into the DB`);
});

customerrouter.post("/search", (req, res) => {
  let name = req.body.name;

  Customer.find({ userName: name })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});

customerrouter.post("/getcustomer", (req, res) => {
  Customer.find({ userName: req.body.userName })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});



customerrouter.post("/userSignIn",(req,res)=>{
    console.log(req.body)
})

customerrouter.post("/userSignUp",(req,res)=>{
    console.log(req.body)
})

export default customerrouter;

// module.exports = router;

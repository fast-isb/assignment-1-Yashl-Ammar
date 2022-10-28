import express from "express";
import Customer from "../models/customer.model.js";
// const express = require('express');
const customerrouter = express.Router();


customerrouter.get("/add", (req, res) => {
  res.json("<h2>Hello world</h2>");
});

customerrouter.post("/", (req, res) => {
  const user = req.body;
  console.log(req.body);
  res.send(`added into the DB`);
});
customerrouter.post("/ban", async (req, res) => {
  let filter = { username: req.body.username };
  let update = { banned: req.body.banned };

  console.log(req.body);

  await Customer.updateOne(filter, update);

  res.json("Ban Status Updated");
});
customerrouter.post("/search", (req, res) => {
  let name = req.body.name;

  Customer.find({ username: name })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});

customerrouter.post("/delete", (req, res) => {
  Customer.deleteOne({ username: req.body.username })
    .then(() => {
      res.json("Worker Deleted");
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});
customerrouter.post("/getcustomer", (req, res) => {
  let name =req.body.username
  Customer.find({ username: name })
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

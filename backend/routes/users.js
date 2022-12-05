import express from "express";

import Customer from "../models/customer.model.js";
import feedback from "../models/feedback.model.js";
// const express = require('express');
const router = express.Router();

const users = [
  {
    name: "John Doe",
    age: 25,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  console.log(req.body);
  res.send(`added into the DB`);
});

router.post("/userSignIn",(req,res)=>{
    console.log(req.body)
    let userName=req.body.userName
    let password=req.body.password
    Customer.find({userName:userName, password:password})
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
    
  
})
router.post("/userfeedback",(req,res)=>{
  console.log(req.body)
  let email,serviceused,message,username
  username=req.body.username 
  email=req.body.email
  serviceused=req.body.service
  message=req.body.message

  const newFeedBack= new feedback({
    username,email,serviceused,message
  })
  newFeedBack.save().then(()=>{
    res.json("Feedback has been added")
  }).catch(()=>{
    res.status(400).json("Error " + err);
  })
})

router.post("/userSignUp",(req,res)=>{
    console.log(req.body)
    let name=req.body.name
    let userName=req.body.username
    let email= req.body.email
    let password=req.body.password
    let Address=req.body.address
    let phoneNum= req.body.phoneNum

    const newUser= new Customer({
    name,
    userName,
    email,
    password,
    phoneNum,
    Address,
    });

   newUser
   .save()
    .then(() => {
      res.json("Worker has been added");
      
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
      
    });

   
});

export default router;

// module.exports = router;

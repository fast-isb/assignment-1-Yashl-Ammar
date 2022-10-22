import express from "express";
import Worker from "../models/worker.model.js";

const workerRouter = express.Router();

workerRouter.post("/add", (req, res) => {
  console.log(req.body);

  let username = req.body.username;
  let fname = req.body.fname;
  let lname = req.body.lname;
  let dob = req.body.dob;
  let pNo = req.body.pNumber;
  let domain = req.body.domain;
  let service = req.body.services;
  let hNo = req.body.hNo;
  let street = req.body.street;
  let sector = req.body.sector;
  let city = req.body.city;
  let password = req.body.password;
  let banned = req.body.banned;

  const newWorker = new Worker({
    username,
    fname,
    lname,
    dob,
    pNo,
    domain,
    service,
    hNo,
    street,
    sector,
    city,
    password,
    banned,
  });
  newWorker
    .save()
    .then(() => {
      res.json("Worker has been added");
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});

workerRouter.post("/search", (req, res) => {
    let name = req.body.name;
    Worker.find({ fname: name})
      .then((worker) => {
        res.json(worker);
      })
      .catch((err) => {
        res.status(400).json("Error " + err);
      });
  });

workerRouter.post('/getworker', (req,res) => {

    Worker.find({username : req.body.username})
    .then(worker => {
        res.json(worker);
    })
    .catch((err) => {
        res.status(400).json("Error " + err);
    })
})

workerRouter.post('/delete',(req,res)=> {

    Worker.deleteOne({username : req.body.username})
    .then(() => {
        res.json('Worker Deleted');
    })
    .catch((err) => {
        res.status(400).json("Error " + err);
    })
})

workerRouter.post('/ban',  async (req,res)=> {

    let filter = {username : req.body.username};
    let update = {banned : req.body.banned};

    console.log(req.body);

    await Worker.updateOne(filter,update);

    res.json('Ban Status Updated');
})

workerRouter.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  Worker.find({ username: req.body.username })
    .then((worker) => {
      res.json(worker);
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});
export default workerRouter;

import  express  from "express";
import Worker from '../models/worker.model.js';

const workerRouter = express.Router();

workerRouter.post('/add',( req, res) => {
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
        domain ,
        service,
        hNo,
        street ,
        sector ,
        city ,
        password ,
        banned,
    });
    newWorker.save()
    .then(() => {
        res.json('Worker has been added');
    })
    .catch(err => {
        res.status(400).json('Error ' + err);
    })
})

export default workerRouter;